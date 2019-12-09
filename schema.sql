CREATE DATABASE pretrial_db;

USE pretrial_db;

CREATE TABLE users
(
    id INT
    AUTO_INCREMENT,
    email VARCHAR
    (30) NOT NULL,
    password VARCHAR
    (30) NOT NULL,
    cID INT NOT NULL,
    PRIMARY KEY
    (id)
);