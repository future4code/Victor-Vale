Questão 1

a) ALTER TABLE Actor DROP COLUMN salary esse comando irá apagar a coluna que exibe o salário do ator

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6) esse comando edita a coluna gênero e renomeia para "sexo" para preenchimento de até 6 caracteres

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255) esse comando edita a coluna genêro e para preenchimento de 255 caracteres

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Questão 2 

a) UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c) UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

Questão 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

Questão 4

a) SELECT MAX(salary) FROM Actor

b) SELECT MIN(salary) FROM Actor WHERE gender = "female"

c) SELECT COUNT(*) FROM Actor WHERE gender = "female"

d) SELECT SUM(salary) FROM Actor

Questão 5

a) Esse comando mostra a quantidade de atores do sexo masculino e do sexo feminino

b) SELECT id, name FROM Actor ORDER BY name DESC

c) SELECT * FROM Actor ORDER BY salary

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3

e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender

Questão 6

a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001

d) DELETE FROM Movie WHERE id = "001"

7