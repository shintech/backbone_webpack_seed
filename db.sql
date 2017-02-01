DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    title VARCHAR,
    username VARCHAR,
    password VARCHAR,
    phone VARCHAR,
    email VARCHAR,
    admin BOOLEAN DEFAULT false
);
  
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES ('Kill', 'Bill', 'management', 'killbill', 'password', '5555555555', 'killbill@kill.bill');

INSERT INTO users ( first_name, last_name, title, username, password, phone, email, admin )
VALUES ('Mike', 'Prather', 'IT Support Specialist', 'mprather', 'password', '1234567890', 'mikeprather@email.com', true);

INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Shanna', 'Davis', 'title', 'ShannaDavis', 'password', '8051323761', 'ShannaDavis@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Carleton', 'Hirthe', 'title', 'CarletonHirthe', 'password', '4941164166', 'CarletonHirthe@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Susana', 'Brakus', 'title', 'SusanaBrakus', 'password', '4737503997', 'SusanaBrakus@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Lucile', 'Glover', 'title', 'LucileGlover', 'password', '1064920671', 'LucileGlover@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Kimberly', 'Barrows', 'title', 'KimberlyBarrows', 'password', '1874819255', 'KimberlyBarrows@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Stacy', 'Howe', 'title', 'StacyHowe', 'password', '9381924263', 'StacyHowe@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Marlin', 'Schumm', 'title', 'MarlinSchumm', 'password', '9783716768', 'MarlinSchumm@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Luella', 'Wehner', 'title', 'LuellaWehner', 'password', '2575611193', 'LuellaWehner@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Evert', 'Kulas', 'title', 'EvertKulas', 'password', '3549305951', 'EvertKulas@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Wilhelmine', 'Lindgren', 'title', 'WilhelmineLindgren', 'password', '8923994641', 'WilhelmineLindgren@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Issac', 'Runolfsdottir', 'title', 'IssacRunolfsdottir', 'password', '6966761879', 'IssacRunolfsdottir@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Mariela', 'Lind', 'title', 'MarielaLind', 'password', '3273725507', 'MarielaLind@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Georgette', 'Stehr', 'title', 'GeorgetteStehr', 'password', '2307617102', 'GeorgetteStehr@test.com');
INSERT INTO users ( first_name, last_name, title, username, password, phone, email )
VALUES('Adriana', 'Bernhard', 'title', 'AdrianaBernhard', 'password', '6569373580', 'AdrianaBernhard@test.com');


DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    title VARCHAR,
    username VARCHAR,
    password VARCHAR,
    phone VARCHAR,
    email VARCHAR
);

DROP DATABASE IF EXISTS api_production;
CREATE DATABASE api_production;

\c api_production;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    title VARCHAR,
    username VARCHAR,
    password VARCHAR,
    phone VARCHAR,
    email VARCHAR
);