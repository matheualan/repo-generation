CREATE DATABASE IF NOT EXISTS db_generation_games_online
DEFAULT CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE db_generation_games_online;

CREATE TABLE tb_classes (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	type_class VARCHAR(50) NOT NULL,
	description VARCHAR(255) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE tb_characters (
	id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	lv INT NOT NULL,
	hp INT NOT NULL,
	sp INT NOT NULL,
	atq INT NOT NULL,
	atqm INT NOT NULL,
	class_id INT NOT NULL
)ENGINE=InnoDB;

INSERT INTO tb_classes (name, type_class, description) 
VALUES
('Lorde ', 'Corpo a Corpo', 'Alta resistência e dano físico'),
('Arquimago', 'Magia', 'Especialista em magias ofensivas'),
('Atirador de Elite', 'Longo Alcance', 'Ataques rápidos à distância'),
('Algoz', 'Furtividade', 'Alto dano e alta velocidade'),
('Paladino', 'Híbrido', 'Defesa elevada e suporte');

SELECT * FROM tb_classes;

INSERT INTO tb_characters (name, lv, hp, sp, atq, atqm, class_id)
VALUES
('Loki', 		45, 	5500, 	800, 	180, 	0, 		1),
('Merlin', 		50, 	7000, 	1200, 	150, 	50, 	5),
('Cassandra', 	40, 	2100, 	1500, 	10, 	220, 	2),
('Artemis', 	38, 	2200, 	700, 	135, 	0, 		3),
('Chaos', 		42, 	4500, 	700, 	250, 	30, 	4),
('Iris', 		65, 	8700, 	1600, 	245, 	80, 	5),
('Celine', 		30, 	3200, 	450, 	100, 	0, 		1),
('Cronos', 		55, 	3000, 	2300, 	15, 	300, 	2);

SELECT * FROM tb_characters;

SELECT * FROM tb_characters WHERE atq > 100;
SELECT * FROM tb_characters WHERE atq >= 100;
SELECT * FROM tb_characters WHERE atq BETWEEN 180 AND 500;
SELECT * FROM tb_characters WHERE atq;

SELECT * FROM tb_characters WHERE atqm > 80;
SELECT * FROM tb_characters WHERE atqm >= 80;
SELECT * FROM tb_characters WHERE atqm BETWEEN 50 AND 500;
SELECT * FROM tb_characters WHERE atqm;

SELECT * FROM tb_characters WHERE name LIKE '%c%';

SELECT * FROM tb_characters ch
INNER JOIN tb_classes cl
ON ch.class_id = cl.id;

SELECT * FROM tb_characters ch
INNER JOIN tb_classes cl
ON ch.class_id = cl.id
WHERE cl.name = 'Paladino';

SELECT * FROM tb_characters;
SELECT * FROM tb_characters WHERE class_id = 5;


