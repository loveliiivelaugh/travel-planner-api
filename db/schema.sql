DROP DATABASE IF EXISTS travelers_db;

CREATE DATABASE travelers_db;

USE travelers_db;

CREATE TABLE traveler (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR,
  password PASSWORD,
  email VARCHAR,
  primary key(id)
)

CREATE TABLE location (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR,
  primary key(id)
)

CREATE TABLE trips (
  id INTEGER NOT NULL AUTO_INCREMENT,
  trip_budget INTEGER,
  traveler_amount INTEGER,
  FOREIGN KEY(traveler_id) REFERENCES traveler(id),
  FOREIGN KEY(location_id) REFERENCES location(id),
  primary key(id),
)