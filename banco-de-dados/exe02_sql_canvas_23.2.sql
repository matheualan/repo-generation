CREATE DATABASE IF NOT EXISTS db_pizzaria_legal
DEFAULT CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

DROP TABLE db_pizzaria;

USE db_pizzaria_legal;

CREATE TABLE tb_pizzas (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    ingredients VARCHAR(255) NOT NULL,
    stuffed_edge BOOLEAN NOT NULL,
    category_id BIGINT NOT NULL,
    CONSTRAINT fk_pizzas_categories
        FOREIGN KEY (category_id)
        REFERENCES tb_categories(id)
)ENGINE=InnoDB;

CREATE TABLE tb_categories (
	id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(255) NOT NULL,
	size VARCHAR(20) NOT NULL
)ENGINE=InnoDB;

INSERT INTO tb_categories (name, description, size) 
VALUES
('Tradicional', 'Pizzas salgadas clássicas', 'Grande'),
('Especial', 'Pizzas com ingredientes premium', 'Grande'),
('Doce', 'Pizzas doces', 'Média'),
('Vegetariana', 'Sem carne', 'Grande'),
('Broto', 'Pizzas individuais', 'Pequena');

INSERT INTO tb_pizzas (name, price, ingredients, stuffed_edge, category_id) 
VALUES
('Mussarela', 42.00, 'Mussarela, tomate e orégano', false, 1),
('Calabresa', 48.00, 'Calabresa, cebola e mussarela', true, 1),
('Margherita', 55.00, 'Mussarela, tomate e manjericão', false, 2),
('Quatro Queijos', 65.00, 'Mussarela, provolone, gorgonzola e parmesão', true, 2),
('Chocolate', 52.00, 'Chocolate ao leite e granulado', false, 3),
('Banana com Canela', 58.00, 'Banana, açúcar e canela', false, 3),
('Vegetariana', 60.00, 'Legumes, tomate e mussarela', false, 4),
('Mini Calabresa', 35.00, 'Calabresa e mussarela', false, 5);

SELECT * FROM tb_pizzas WHERE price > 45.00;
SELECT * FROM tb_pizzas WHERE price BETWEEN 50.00 AND 100.00;
SELECT * FROM tb_pizzas WHERE name LIKE '%M%';

SELECT * FROM tb_pizzas p INNER JOIN tb_categories c ON p.category_id = c.id;
SELECT * FROM tb_pizzas p INNER JOIN tb_categories c ON p.category_id = c.id WHERE c.name = 'Doce';

