CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
    Burger_name VARCHAR
    (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY
    (id)
);