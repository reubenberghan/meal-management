-- DATABASE
DROP DATABASE IF EXISTS mms;

CREATE DATABASE mms;

ALTER DATABASE mms OWNER TO mms_postgraphile;

\connect mms

-- SCHEMAS
CREATE SCHEMA app_hidden;

ALTER SCHEMA app_hidden OWNER TO mms_postgraphile;

CREATE SCHEMA app_jobs;

ALTER SCHEMA app_jobs OWNER TO mms_postgraphile;

CREATE SCHEMA app_private;

ALTER SCHEMA app_private OWNER TO mms_postgraphile;

CREATE SCHEMA app_public;

ALTER SCHEMA app_public OWNER TO mms_postgraphile;

-- EXTENSIONS
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';

-- TYPES
CREATE TYPE app_public.jwt_token AS (
	role text,
	account_id uuid
);

ALTER TYPE app_public.jwt_token OWNER TO mms_postgraphile;

-- DOMAINS
CREATE DOMAIN public.email AS text
	CONSTRAINT email_check CHECK ((VALUE ~* '^(("[-\w\s]+")|([\w-]+(?:\.[\w-]+)*)|("[-\w\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)'::text));

ALTER DOMAIN public.email OWNER TO mms_postgraphile;

CREATE DOMAIN public.password AS text
	CONSTRAINT password_check CHECK ((char_length(VALUE) >= 8));

ALTER DOMAIN public.password OWNER TO mms_postgraphile;
