-- FULL RECIPE
CREATE VIEW app_private.full_recipe AS
  SELECT recipe.id,
    recipe.name,
    (SELECT array_agg(ia.name) AS ingredients
      FROM app_public.recipe ra
        JOIN app_public.recipe_ingredient ria ON ra.id = ria.recipe_id
        JOIN app_public.ingredient ia ON ria.ingredient_id = ia.id
      WHERE ra.id = recipe.id) AS ingredients
    FROM app_public.recipe recipe;

ALTER TABLE app_private.full_recipe OWNER TO mms_postgraphile;

COMMENT ON VIEW app_private.full_recipe IS 'Provides a view of each recipe with an array of associated ingredients.';

-- INGREDIENT USE COUNT
CREATE VIEW app_private.ingredient_use_count AS
 SELECT ig.id,
    ig.name,
    ic.use_count
   FROM (app_public.ingredient ig
     LEFT JOIN ( SELECT count(i.recipe_id) AS use_count,
            i.ingredient_id
           FROM app_public.recipe_ingredient i
          GROUP BY i.ingredient_id) ic ON (ig.id = ic.ingredient_id))
  ORDER BY ig.name;

ALTER TABLE app_private.ingredient_use_count OWNER TO mms_postgraphile;

COMMENT ON VIEW app_private.ingredient_use_count IS 'Returns a count of the total recipes with which a ingredient is associated.';

-- MANAGED RECIPE (MATERIALIZED)
CREATE MATERIALIZED VIEW app_public.managed_recipe AS
  SELECT 'Recipe'::text AS type,
    full_recipe.id,
    full_recipe.name,
    full_recipe.ingredients
    FROM app_private.full_recipe
    WITH NO DATA;

ALTER MATERIALIZED VIEW app_public.managed_recipe OWNER TO mms_postgraphile;

CREATE UNIQUE INDEX unique_managed_recipe ON app_public.managed_recipe USING btree (id);

COMMENT ON MATERIALIZED VIEW app_public.managed_recipe IS 'Provides a view into all recipes.';
