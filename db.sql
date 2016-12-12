DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
    name VARCHAR
);
  
INSERT INTO models ( name )
VALUES ('sample1');

INSERT INTO models ( name )
VALUES ('sample2');

INSERT INTO models ( name )
VALUES ('sample3');

INSERT INTO models ( name )
VALUES ('sample4');

INSERT INTO models ( name )
VALUES ('sample5');

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
    name VARCHAR
);

DROP DATABASE IF EXISTS api_production;
CREATE DATABASE api_production;

\c api_production;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
    name VARCHAR
);