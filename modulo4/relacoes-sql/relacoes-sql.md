Exercicio n1 
a) Chave estrangeira é a chave criada com objetivo de se criar mais de uma relação entre tabelas.
No caso relações N:M
b)

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

c) 

d) ALTER TABLE Movie DROP COLUMN rating;

Exercicio n2

a) Essa é uma tabela de junção para unir as tabelas de atores com a tabela de filmes ;

b) INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("1", "1"), ("1", "003"), ("2", "1643827538496"), ("3", "1643827566934"), ("4", "003"), ("3", "1"); 

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`##############`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`############`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Exercicio n3 

a) O operador ON é a condição para junção das tabelas;

b) SELECT titulo, id, avaliacao FROM Filmes;

