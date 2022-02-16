USE `carver-victor-ferreira-do-vale`;

1- CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
a)VARCHAR é para declaração de strings 
Date é declaração de variáveis tipo data
b)SHOW DATABASES é um comando para exibir todos os bancos de dados e SHOW TABLES é um comando para exibir todas as tabelas de um banco de dados atual 
c) DESCRIBE é um comando para exibir todas as colunas com nomes específicos

2 a) INSERT INTO Actor(id, name, salary, birth_date, gender) VALUES(002, "Gloria Pires", 30000, "1963/08/23", "female");
b) Duplicated entry 002 for key PRIMARY (entrada duplicada para chave 2)
c)0	15	20:22:39	EXPLAIN INSERT INTO Actor (id, name, salary) ALUES("003", "Fernanda Montenegro", 300000,"1929-10-19", "female")	Error Code: 1064
 You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'ALUES("003", "Fernanda Montenegro", 300000,"1929-10-19", "female")' at line 1	
d) 0	16	20:24:10	INSERT INTO Actor (id, salary, birth_date, gender) VALUES( "004", 400000, "1949-04-18", "male")	Error Code: 1364. Field 'name' doesn't have a default value	0.157 sec
e)	17	20:26:24	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("005", "Juliana Paes", 719333.33, 1979-03-26, "female")	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.156 sec

3 - a) Fernanda Montenegro 003 300000	1929-10-19
b) 3	23	20:42:39	SELECT salary from Actor WHERE name = "Tony Ramos"
 LIMIT 0, 1000	0 row(s) returned	0.156 sec / 0.000 sec
 c)3	24	20:44:36	SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid"
 LIMIT 0, 1000	0 row(s) returned	0.156 sec / 0.000 sec
 d)


