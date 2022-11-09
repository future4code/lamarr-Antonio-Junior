RESOLUÇÃO DO EXERCICIO 01

A. 

Para criamos uma tabela usamos o CREATE TABLE
Para defirmos o tipo do dado a ser recebido usamos o VANCHAR(255) e dentro do parenteses definimos a quantidade de caracteres.
Para defirirmos a chave primaria usamos PRAMARY KEY 
Para deixar um campo obrigatório usamos NOT NULL
E para recebermos um campo como data usamos DATE

B.

O primeiro comando o SHOW DATABASES é mostrado todos os skchemas e para mostrar todas as tabelas usamos SHOW TABLE

C.

Para mostrar os campos criados na tabela, usamos o DESCRIBE



RESOLUÇÃO DO EXERCICIO 02

A.

insert into Actor (id, actor_name, salary, birth_date, gender) 
values("002", "Gloria Pires", 1200000, "1963-08-23", "female");


B. 

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

Não pode ser criado com id identicos

C.

Error Code: 1136. Column count doesn't match value count at row 1

D. 

Error Code: 1364. Field 'actor_name' doesn't have a default value

E.

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

Erro pois não contém as aspas

INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

F.

INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES(
  "006", 
  "Van Daime",
  101.00,
  "1975-11-13", 
  "male"
);

RESOLUÇÃO DO EXERCICIO 03

A. 

select * from Actor where gender='female';

B. 

select salary from Actor where actor_name='Tony Ramos';

C. 

select * from Actor where gender = "invalid";

D. 

select id, actor_name, salary from Actor where salary <=500;

E. 

SELECT id, actor_name from Actor WHERE id = "002";


RESOLUÇÃO DO EXERCICIO 04

A. 


B. select * from Actor where (actor_name not like 'A%') and salary > 350000;

C. select * from Actor where actor_name like '%g%' or actor_name like '%G%';

D. select * from Actor where (actor_name like '%a%' or actor_name like '%A%') and salary between 350000 and 900000;



RESOLUÇÃO DO EXERCICIO 06

A. select id, movie_name, rating from Movies where id="004";

B. select * from Movies where movie_name = "Doce de mãe";

C . select id, movie_name, synopsis from Movies where rating >= 7;


-------



