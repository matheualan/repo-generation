CREATE DATABASE IF NOT EXISTS db_ecommerce
DEFAULT CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE db_ecommerce;

DROP DATABASE db_ecommerce;

CREATE TABLE tb_products (
	id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR(150) NOT NULL,
	category VARCHAR(60) NOT NULL,
	value DECIMAL(10,2) NOT NULL,
	stock INT NOT NULL
)ENGINE=InnoDB;

INSERT INTO tb_products (name, category, value, stock)
VALUES
('Processador Ryzen 5 5600X', 'Processador', 899.90, 15),
('Processador Core i5 12400F', 'Processador', 1099.00, 10),
('Placa de Vídeo RTX 3060', 'Placa de Vídeo', 1899.90, 5),
('Placa de Vídeo GTX 1660 Super', 'Placa de Vídeo', 1299.90, 8),
('Memória RAM 16GB DDR4', 'Memória RAM', 399.90, 30),
('SSD NVMe 1TB', 'Armazenamento', 549.90, 20),
('HD 1TB', 'Armazenamento', 299.90, 25),
('Fonte 600W 80 Plus Bronze', 'Fonte', 479.90, 12);

SELECT * FROM tb_products WHERE value > 500;
SELECT * FROM tb_products WHERE value < 500;

UPDATE tb_products SET stock = 0 WHERE name = 'Placa de Vídeo RTX 3060';
