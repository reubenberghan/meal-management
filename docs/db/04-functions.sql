-- generate UUID
CREATE FUNCTION app_public.generate_u_u_i_d() RETURNS uuid
    LANGUAGE plpgsql
    AS $$
DECLARE
  output uuid;
BEGIN
  output := uuid_generate_v1mc();

  RETURN output;
END;
$$;

ALTER FUNCTION app_public.generate_u_u_i_d() OWNER TO mms_postgraphile;

COMMENT ON FUNCTION app_public.generate_u_u_i_d() IS 'Generates a single v1mc UUID.';

-- generate UUIDs
CREATE FUNCTION app_public.generate_u_u_i_ds(quantity integer) RETURNS uuid[]
    LANGUAGE plpgsql
    AS $_$
DECLARE
  counter integer := 0;
  uuids uuid[];
BEGIN
  WHILE counter < $1 LOOP
    counter := counter + 1;
    uuids := array_append(uuids, uuid_generate_v1mc());
  END LOOP;

  RETURN uuids;
END;
$_$;

ALTER FUNCTION app_public.generate_u_u_i_ds(quantity integer) OWNER TO mms_postgraphile;

COMMENT ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) IS 'Returns an array of UUIDs of length `quantity`.';

-- uuid to muid
CREATE FUNCTION public.muid_to_uuid(id text) RETURNS uuid
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
  select
    (encode(substring(bin from 9 for 9), 'hex') || encode(substring(bin from 0 for 9), 'hex'))::uuid
  from decode(translate(id, '-_', '+/') || '==', 'base64') as bin;
$$;

ALTER FUNCTION public.muid_to_uuid(id text) OWNER TO mms_postgraphile;

COMMENT ON FUNCTION public.muid_to_uuid(id text) IS 'Converts an MUID to a UUID.';

-- muid to uuid
CREATE FUNCTION public.uuid_to_muid(id uuid) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
  select translate(
    encode(
      substring(decode(replace(id::text, '-', ''), 'hex') from 9 for 8) ||
      substring(decode(replace(id::text, '-', ''), 'hex') from 1 for 8),
      'base64'
    ),
    '+/=', '-_'
  );
$$;

ALTER FUNCTION public.uuid_to_muid(id uuid) OWNER TO mms_postgraphile;

COMMENT ON FUNCTION public.uuid_to_muid(id uuid) IS 'Converts a UUID to an MUID.';

-- set updated at
CREATE FUNCTION app_private.set_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  new.updated_at := current_timestamp;
  RETURN new;
END;
$$;

ALTER FUNCTION app_private.set_updated_at() OWNER TO mms_postgraphile;

COMMENT ON FUNCTION app_private.set_updated_at() IS 'Sets the updated at timestamp for a record (on trigger).';

-- upsert ingredient
CREATE FUNCTION app_private.upsert_ingredient(ingredient_name text) RETURNS uuid
    LANGUAGE plpgsql
    AS $_$
DECLARE
  id uuid;
BEGIN
  INSERT INTO app_public.ingredient AS i (name) VALUES ($1) ON CONFLICT (lower(name)) DO UPDATE SET updated_at = NOW() RETURNING i.id INTO id;

  RETURN id;
END;
$_$;

ALTER FUNCTION app_private.upsert_ingredient(ingredient_name text) OWNER TO mms_postgraphile;

COMMENT ON FUNCTION app_private.upsert_ingredient(ingredient_name text) IS 'Inserts a ingredient unless it already exists and returns the ingredient id.';

-- delete unused ingredients
CREATE FUNCTION app_private.delete_unused_ingredients() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  DELETE FROM app_public.ingredient WHERE id IN (
    SELECT id FROM app_private.ingredient_use_count WHERE use_count IS NULL
  );
  RETURN NULL;
END;
$$;

ALTER FUNCTION app_private.delete_unused_ingredients() OWNER TO mms_postgraphile;

COMMENT ON FUNCTION app_private.delete_unused_ingredients() IS 'Deletes any unused ingredients.';

-- upsert recipe ingredient
CREATE FUNCTION app_public.upsert_recipe_ingredient(recipe_row_id uuid, ingredient_name text) RETURNS app_private.full_recipe
    LANGUAGE plpgsql
    AS $_$
DECLARE
  ingredient_id uuid;
  recipe app_private.full_recipe;
BEGIN
  SELECT app_private.upsert_ingredient($2) INTO ingredient_id;

  INSERT INTO app_public.recipe_ingredient AS ri (recipe_id, ingredient_id) VALUES ($1, ingredient_id) ON CONFLICT DO NOTHING;

  SELECT * FROM app_private.full_recipe fr WHERE fr.id = $1 INTO recipe;

  REFRESH MATERIALIZED VIEW app_public.managed_recipe;

  RETURN recipe;
END;
$_$;

ALTER FUNCTION app_public.upsert_recipe_ingredient(recipe_row_id uuid, ingredient_name text) OWNER TO mms_postgraphile;

COMMENT ON FUNCTION app_public.upsert_recipe_ingredient(recipe_row_id uuid, ingredient_name text)
  IS 'Inserts an ingredient unless it already exists and links it to a specified recipe.';

-- remove ingredient from recipe
CREATE FUNCTION app_public.remove_ingredient_from_recipe(recipe_row_id uuid, ingredient_name text) RETURNS void
    LANGUAGE plpgsql
    AS $_$
DECLARE
  id uuid;
BEGIN
  SELECT i.id FROM app_public.ingredient i WHERE lower(name) = lower($2) INTO id;

  DELETE FROM app_public.recipe_ingredient ri WHERE ri.ingredient_id = id AND ri.recipe_id = $1;

  REFRESH MATERIALIZED VIEW app_public.managed_recipe;

  RETURN;
END;
$_$;

ALTER FUNCTION app_public.remove_ingredient_from_recipe(recipe_row_id uuid, ingredient_name text) OWNER TO mms_postgraphile;

COMMENT ON FUNCTION app_public.remove_ingredient_from_recipe(recipe_row_id uuid, ingredient_name text)
  IS 'Deletes an edge between a recipe and a ingredient and refreshes the full_recipe view.';

-- refresh managed recipe materialized view
CREATE FUNCTION app_public.refresh_managed_recipe_materialized_view() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY app_public.managed_recipe;
  RETURN null;
END;
$$;

ALTER FUNCTION app_public.refresh_managed_recipe_materialized_view() OWNER TO mms_postgraphile;

COMMENT ON FUNCTION app_public.refresh_managed_recipe_materialized_view()
  IS 'Automatically refreshes the managed_recipe view on inserts, updates, and deletions of recipe, ingredient, etc.';
