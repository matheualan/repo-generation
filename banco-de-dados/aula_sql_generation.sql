CREATE DATABASE db_generation;
DROP DATABASE db_generation;
DROP TABLE tb_products;

USE db_generation;

CREATE TABLE tb_products (
	id BIGINT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255),
	quantity INT,
	price DECIMAL(8, 2),
	dateValidate DATE,
	created_at DATE,
	PRIMARY KEY (id)
);

INSERT INTO tb_products (name) VALUES ('Bull'), ('Zuty');
INSERT INTO tb_products (name, quantity, price, dateValidate) VALUES ('Acelora', 50, 5, '2026-01-15');

SELECT * FROM tb_products;
SELECT id, name FROM tb_products;
SELECT name FROM tb_products WHERE id = 2;
SELECT name FROM tb_products WHERE price > 10;
SELECT name, price, quantity FROM tb_products WHERE price < 10 AND quantity > 20;
SELECT name, price, quantity FROM tb_products WHERE price > 10 OR quantity > 20;
SELECT price * 2 FROM tb_products;

SELECT * FROM tb_products ORDER BY name;
SELECT * FROM tb_products ORDER BY name ASC;
SELECT * FROM tb_products WHERE price = 5 OR price = 10;
SELECT * FROM tb_products WHERE price IN (5, 10 ,15);
SELECT * FROM tb_products WHERE price >= 5 AND price <= 15;
SELECT * FROM tb_products WHERE price BETWEEN 5 AND 15;
SELECT * FROM tb_products WHERE name LIKE = "a%";
SELECT * FROM tb_products WHERE name LIKE = "a%e";
SELECT * FROM tb_products WHERE name LIKE = "%a%";

DELETE FROM tb_products WHERE id = 3;

ALTER TABLE tb_products MODIFY price DECIMAL(6,2);
ALTER TABLE tb_products ADD description VARCHAR(255);
ALTER TABLE tb_products DROP description;
ALTER TABLE tb_products CHANGE dateValidate date_validate DATE;

UPDATE tb_products SET price = 9.99 WHERE id = 2;

#Remover a regra de seguranca do MySQL
#SET SQL_SAFE_UPDATES = 1; # 0 = false / 1 = true


INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Batata doce", 2000, "2022-03-09", 10.00, 3);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Alface", 300, "2022-03-10", 7.00, 2);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Cebola", 1020, "2022-03-08", 5.00, 3);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES("Ovo Branco", 1000, "2022-03-07", 15.00, 5);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES("Agrião", 1500, "2022-03-06", 3.00, 2);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES("Cenoura", 1800, "2022-03-09", 3.50, 3);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Pimenta", 1100, "2022-03-15", 10.00, 4);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Alecrim", 130, "2022-03-10", 5.00, 4);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Manga", 200, "2022-03-07", 5.49, 1);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Couve", 100, "2022-03-12", 1.50, 2);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES("Rabanete", 1200, "2022-03-15", 13.00, 3);
 
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Grapefruit", 3000, "2022-03-13", 50.00, 1);
 
INSERT INTO tb_produtos (nome, quantidade, preco)
VALUES("Sacola Cinza", 1118, 0.50);
 
INSERT INTO tb_produtos (nome, quantidade, preco)
VALUES("Sacola Verde", 1118, 0.50);
