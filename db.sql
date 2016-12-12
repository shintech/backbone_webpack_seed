DROP DATABASE IF EXISTS api;
CREATE DATABASE api;

\c api;

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
