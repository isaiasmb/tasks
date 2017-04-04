# Um simples gerenciador de tarefas com Java 8 e Angular 1.6

- PostgreSQL 9.4
- Java 8
- Angular 1.6
- Tomcat 9 (compatível com as versões 8.5 e 7 também)

Instruções para rodar a aplicação:

1- Criar um banco chamado 'tasks'

2- Alterar as configurações de acesso ao banco no arquivo 'src/main/resources/conexao.properties', caso for necessário

3- Na pasta raiz do projeto, executar o comando mvn install para baixar as dependências do Maven

4- Na pasta '/src/main/webapp/' executar o comando bower install para baixar as dependências do Bower

5- Gerar .war e rodar no Tomcat.
