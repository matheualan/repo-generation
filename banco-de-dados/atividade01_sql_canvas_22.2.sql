CREATE DATABASE db_rh_empresa; 
DROP DATABASE db_rh;

USE db_rh_empresa;

CREATE TABLE tb_collaborators (
	id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR(100) NOT NULL,
	department VARCHAR(80) NOT NULL,
	salary DECIMAL (10,2) NOT NULL,
	admission_date DATE NOT NULL
)ENGINE=InnoDB;

INSERT INTO tb_collaborators (name, department, salary, admission_date)
VALUES
('Ana Silva', 'Recursos Humanos', 2500.00, '2022-03-15'),
('Bruno Costa', 'Administração', 1800.00, '2023-01-10'),
('Carla Souza', 'TI', 4500.00, '2021-08-01'),
('Diego Lima', 'TI', 1200.00, '2024-02-05'),
('Elisa Rocha', 'Recursos Humanos', 3800.00, '2020-11-20');

SELECT * FROM tb_collaborators;

SELECT * FROM tb_collaborators WHERE salary > 2000;
SELECT * FROM tb_collaborators WHERE salary < 2000;

UPDATE tb_collaborators SET salary = 2026 WHERE name = 'Diego Lima';