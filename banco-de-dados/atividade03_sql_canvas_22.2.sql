CREATE DATABASE IF NOT EXISTS db_school
DEFAULT CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE db_school;

CREATE TABLE tb_students (
	id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR(150) NOT NULL,
	birth DATE NOT NULL,
	city VARCHAR(60) NOT NULL,
	grade DECIMAL (3,1) NOT NULL,
	registration DATE NOT NULL,
	created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB;

INSERT INTO tb_students (name, birth, city, grade, registration)
VALUES
('Ana Paula Silva', '2008-04-12', 'Recife', 8.5, '2023-02-01'),
('Bruno Henrique Costa', '2007-09-30', 'Olinda', 6.8, '2023-02-01'),
('Carla Mendes Rocha', '2009-01-18', 'Jaboatão dos Guararapes', 7.4, '2023-02-01'),
('Diego Santos Lima', '2008-07-05', 'Paulista', 5.9, '2023-02-01'),
('Eduarda Alves Pereira', '2007-11-22', 'Cabo de Santo Agostinho', 9.1, '2023-02-01'),
('Felipe Nogueira Martins', '2009-03-10', 'Camaragibe', 7.0, '2023-02-01'),
('Gabriela Ribeiro Souza', '2008-06-27', 'Abreu e Lima', 8.0, '2023-02-01'),
('Henrique Oliveira Barros', '2007-02-14', 'Igarassu', 6.3, '2023-02-01'),
('Isabela Fernandes Lima', '2009-08-19', 'São Lourenço da Mata', 9.5, '2023-02-01'),
('João Victor Araujo', '2008-12-03', 'Recife', 7.8, '2023-02-01');

SELECT * FROM tb_students WHERE grade > 7.0;
SELECT * FROM tb_students WHERE grade < 7.0;
SELECT * FROM tb_students WHERE grade IN (6.3, 8);
SELECT * FROM tb_students WHERE grade BETWEEN 4 AND 8;

SELECT * FROM tb_students;
SELECT id, name, city FROM tb_students WHERE id = 9;
UPDATE tb_students SET city = 'Jaboatão' WHERE name = 'Isabela Fernandes Lima';

