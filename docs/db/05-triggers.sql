-- TRIGGERS
CREATE TRIGGER recipe_updated_at BEFORE UPDATE
  ON app_public.recipe FOR EACH ROW EXECUTE PROCEDURE app_private.set_updated_at();

CREATE TRIGGER managed_recipe_view_refreshed_on_recipe_insert_or_delete AFTER INSERT OR DELETE
  ON app_public.recipe FOR EACH ROW EXECUTE PROCEDURE app_public.refresh_managed_recipe_materialized_view();

CREATE TRIGGER managed_recipe_view_refreshed_on_recipe_update AFTER UPDATE
  ON app_public.recipe FOR EACH ROW WHEN ((old.name)::text IS DISTINCT FROM (new.name)::text) EXECUTE PROCEDURE app_public.refresh_managed_recipe_materialized_view();

CREATE TRIGGER delete_unused_ingredients_on_recipe_ingredient_deletion AFTER DELETE ON app_public.recipe_ingredient FOR EACH STATEMENT EXECUTE PROCEDURE app_private.delete_unused_ingredients();

-- UNIQUE INDEXES
CREATE UNIQUE INDEX unique_recipe_ingredients ON app_public.recipe_ingredient USING btree (recipe_id, ingredient_id);
