DROP DATABASE IF EXISTS api;
CREATE DATABASE api;

\c api;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
    name VARCHAR,
);
  
INSERT INTO users ( name, email )
VALUES ('Mike', 'mprather@example.com');

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
    name VARCHAR
);

INSERT INTO tasks ( name )
VALUES ('task');
