DROP DATABASE crystl;
CREATE DATABASE crystl;
\c crystl;

CREATE EXTENSION IF NOT EXISTS "citext";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE customers (
  id uuid DEFAULT uuid_generate_v4(),
  name citext NOT NULL
);

CREATE TABLE users (
  id uuid DEFAULT uuid_generate_v4(),
  email citext NOT NULL,
  hash bytea NOT NULL
);
