DROP DATABASE IF EXISTS growth;
CREATE DATABASE growth;
\c growth;

CREATE EXTENSION IF NOT EXISTS "citext";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE customers (
  id uuid DEFAULT uuid_generate_v4(),
  name citext NOT NULL,
  email citext NOT NULL,
  verified boolean NOT NULL DEFAULT false,
  updated_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  created_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE users (
  id uuid DEFAULT uuid_generate_v4(),
  customer_id uuid NOT NULL,
  name citext NOT NULL,
  email citext NOT NULL,
  hash bytea NOT NULL,
  updated_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  created_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(email)
);
