-- ROW LEVEL SECURITY

-- POLICIES

-- USAGE
GRANT USAGE ON SCHEMA app_public TO mms_anonymous;
GRANT USAGE ON SCHEMA app_public TO mms_account;

GRANT ALL ON SCHEMA public TO PUBLIC;

-- SELECT POLICIES

-- PERMISSIONS
GRANT ALL ON app_public.recipe TO mms_anonymous;

-- GRANT FUNCTION PERMISSIONS
REVOKE ALL ON FUNCTION app_public.generate_u_u_i_d() FROM mms_postgraphile;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_d() TO mms_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_d() TO mms_anonymous;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_d() TO mms_account;

REVOKE ALL ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) FROM mms_postgraphile;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) TO mms_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) TO mms_anonymous;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) TO mms_account;

REVOKE ALL ON FUNCTION public.muid_to_uuid(id text) FROM mms_postgraphile;
GRANT ALL ON FUNCTION public.muid_to_uuid(id text) TO mms_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION public.muid_to_uuid(id text) TO mms_anonymous;
GRANT ALL ON FUNCTION public.muid_to_uuid(id text) TO mms_account;

REVOKE ALL ON FUNCTION public.uuid_to_muid(id uuid) FROM mms_postgraphile;
GRANT ALL ON FUNCTION public.uuid_to_muid(id uuid) TO mms_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION public.uuid_to_muid(id uuid) TO mms_anonymous;
GRANT ALL ON FUNCTION public.uuid_to_muid(id uuid) TO mms_account;

REVOKE ALL ON FUNCTION app_private.set_updated_at() FROM mms_postgraphile;
GRANT ALL ON FUNCTION app_private.set_updated_at() TO mms_postgraphile WITH GRANT OPTION;
