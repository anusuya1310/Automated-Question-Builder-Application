CREATE DATABASE question_builder;

USE question_builder;

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question TEXT NOT NULL,
  options JSON NOT NULL,
  answer TEXT NOT NULL
);