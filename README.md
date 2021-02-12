# Bem vindo ao projeto **Full Stack Eletro**
## Esse projeto tem como propóstio a entregas das atividades de **React back-end e front-end avançado e noSQL(mongodb)** e também como portfólio.

## **Como rodar o projeto:**
1. Clone o projeto
2. Primeiro vamos ao diretório **backend**
3. Execute a instalação dos módulos necessários com o comando ***npm install***
4. Feito isso use ***npm start*** e o servidor backe-end irá iniciar com nodemon rodando na porta **4000**
5. Voltando para o diretório anterior, abra outro terminal e vá agora no diretório **frontend**
6. Faremos o mesmo processo de instalação de modulos e inicialização de servidores (***npm install e npm start***) e o servidor irá iniciar na porta **3000**
7. Feito isso a sua aplicação estará rodando normalmente.

- Vale dizer que você precisa importar os arquivos de banco de dados para seu MySQL, o arquivo **db.sql** dentro de **backend** tem o conteúdo necessário
- E mantenha também o **NoSQL** ativo.
#
## Sobre **MySQL e NoSQL**:
O motivo dessa aplicação ter os dois tipos de banco de dados é como foi dito isso é também para portfólio, temos em **mysql** consulta join. E em **NoSQL** temos o Create e Select
#
## Sobre avaliação de projetos **RECODE**:
## **React Front-end avançado**:
### Os critérios de avaliação do projeto Front-end avançado estão em:
- [**Produtos**](https://github.com/ThiagoSFerraz/FullStackEletro/blob/main/frontend/src/pages/produtos.js)
- - No carregamento de imagem dos Produtos
- [**Contato**](https://github.com/ThiagoSFerraz/FullStackEletro/blob/main/frontend/src/pages/contato.js)
- - No carregamento da lista de "locais que atendemos"
- [**Pedidos**](https://github.com/ThiagoSFerraz/FullStackEletro/blob/main/frontend/src/pages/pedidos.js)
- - No retorno dos pedidos
#
## **React Back-end avançado**:
### O Critério de avaliação do projeto Back-end está em:
- [**Produtos**](https://github.com/ThiagoSFerraz/FullStackEletro/blob/main/frontend/src/pages/produtos.js)
- - Carregando a Lista de categorias em **SSR**
### Para rodar o **SSR** na inicialização do servidor **frontend** ao invés de executar o comando **npm start** execute o comando **npm run dev**
#
## **MongoDb - NoSQL**:
Os critérios de avaliação do projeto MongoDB estão em:
- [**Conexão**](https://github.com/ThiagoSFerraz/FullStackEletro/tree/main/backend/src/database/mongo.js) Conexão com mongoDB
- [**Modelo de Mensagem**](https://github.com/ThiagoSFerraz/FullStackEletro/blob/main/backend/src/models/mensagem.js)
- [**Dados**](https://github.com/ThiagoSFerraz/FullStackEletro/blob/main/backend/src/routes/consultas.js) Recebendo e Enviando dados em JSON
- [**Formulário**](https://github.com/ThiagoSFerraz/FullStackEletro/blob/main/frontend/src/components/contato/mensagem/index.js) Esse é o local no frontend que os dados são enviados e renderizados
- - Quando feito esse processo o *component* de mensagem é mandado para a página de [**Contato**](https://github.com/ThiagoSFerraz/FullStackEletro/blob/main/frontend/src/pages/contato.js) como Mensagem()
  
