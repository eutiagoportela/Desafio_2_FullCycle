Exercicio Full Cycle Docker:

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

Full Cycle Rocks!
Lista de nomes cadastrada no banco de dados.
Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

A linguagem de programação para este desafio é Node/JavaScript.


Para testar clona o repositório:
rode os seguintes comandos no terminal:
 1- docker-compose up --build -d
 2-docker-compose up -d
 3- no navegador visualizar lista nomes: http://localhost:3000/
 4- no navegador para inserir nome: http://localhost:3000/add/Jo%C3%A3o
