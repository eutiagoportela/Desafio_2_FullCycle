-- Cria o banco de dados apenas se ele não existir
CREATE DATABASE IF NOT EXISTS nodedb;

-- Seleciona o banco de dados
USE nodedb;

-- Cria a tabela apenas se ela não existir
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
