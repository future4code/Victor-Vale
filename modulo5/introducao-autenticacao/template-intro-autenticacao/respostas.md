1 a) Acho que o uso de strings é a melhor forma pois permite a combinação de números , letras e 
caracteres especiais

b) Pasta services

2 a) o primeiro trecho do código estabelece uma conexão com o banco de dados passando as informações 
do usuário do banco para poder se conectar. O segundo trecho de código cria um novo usuário onde são
passadas um id, um email e uma senha 

b) 
CREATE TABLE `Usuários` (
    `id` varchar(64) PRIMARY KEY NOT NULL UNIQUE,
    `email` varchar(64) NOT NULL,
    `password` varchar(255) NOT NULL
  );

c) arquivo create user

3 a) 'as string' está afirmando que que o valor recebido será uma string

b) Arquivo autenticator

4 

5

6 

7 a) O 'as any' é necessário para não dar erro na hora de transpilar e ele indica que qualquer valor pode ser atribuído ao erro.

b)

   export const getTokenData = (token: string): AuthenticationData => {
   return jwt.verify(
       token,
       process.env.JWT_KEY as string
   ) as AuthenticationData
   }