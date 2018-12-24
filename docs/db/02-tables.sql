-- RECIPE
CREATE TABLE app_public.recipe (
  id uuid DEFAULT public.uuid_generate_v1mc() NOT NULL,
  name text NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE app_public.recipe OWNER TO mms_postgraphile;

COMMENT ON TABLE app_public.recipe IS 'A recipe to be managed.';
COMMENT ON COLUMN app_public.recipe.id IS 'The primary unique ID for this recipe.';
COMMENT ON COLUMN app_public.recipe.name IS 'The name of this recipe.';
COMMENT ON COLUMN app_public.recipe.created_at IS 'The date and time this recipe was created.';
COMMENT ON COLUMN app_public.recipe.updated_at IS 'The date and time this recipe was last updated.';

ALTER TABLE ONLY app_public.recipe
  ADD CONSTRAINT recipe_pkey PRIMARY KEY (id);

-- INGREDIENT
CREATE TABLE app_public.ingredient (
  id uuid DEFAULT public.uuid_generate_v1mc() NOT NULL,
  name text NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE app_public.ingredient OWNER TO mms_postgraphile;

CREATE UNIQUE INDEX unique_lowercase_name_in_ingredient ON app_public.ingredient USING btree (lower(name));

COMMENT ON TABLE app_public.ingredient IS 'An ingredient to be used in a recipe.';
COMMENT ON COLUMN app_public.ingredient.id IS 'The primary unique ID for this ingredient.';
COMMENT ON COLUMN app_public.ingredient.name IS 'The name of this ingredient.';
COMMENT ON COLUMN app_public.ingredient.created_at IS 'The date and time this ingredient was created.';
COMMENT ON COLUMN app_public.ingredient.updated_at IS 'The date and time this ingredient was last updated.';

ALTER TABLE ONLY app_public.ingredient
  ADD CONSTRAINT ingredient_pkey PRIMARY KEY (id);

ALTER TABLE ONLY app_public.ingredient
    ADD CONSTRAINT ingredient_name_key UNIQUE (name);

-- RECIPE INGREDIENT
CREATE TABLE app_public.recipe_ingredient (
    recipe_id uuid NOT NULL,
    ingredient_id uuid NOT NULL
);

ALTER TABLE app_public.recipe_ingredient OWNER TO mms_postgraphile;

COMMENT ON COLUMN app_public.recipe_ingredient.recipe_id IS 'A recipe to which this ingredient is assigned.';
COMMENT ON COLUMN app_public.recipe_ingredient.ingredient_id IS 'An ingredient assigned to this recipe.';
