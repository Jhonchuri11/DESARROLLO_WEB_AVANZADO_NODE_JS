-- Creamos db STACK_MEN
CREATE DATABASE IF NOT EXISTS STACK_MEN;

-- Usamos la db STACK_MEN
USE STACK_MEN;

-- Creamos la tabla cliente
CREATE TABLE IF NOT EXISTS cliente (
    idcli INT AUTO_INCREMENT PRIMARY KEY,
    nomcli VARCHAR(50),
    apecli VARCHAR(50),
    nrodnicli VARCHAR(8),
    telcli VARCHAR(9)
);

-- Creamos la tabla pedido
CREATE TABLE IF NOT EXISTS pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idcliente INT,
    fecha VARCHAR(50),
    estado VARCHAR(50),
    total DECIMAL(10,2),
    metodopago VARCHAR(50),
    FOREIGN KEY (idcliente) REFERENCES cliente(idcli)
);