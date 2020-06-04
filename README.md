# Ecoleta :seedling: - Aplicação de Pontos de Coleta de Resíduos 
 
## Projeto da Next Level Week 1.0 - [Rocketseat](https://rocketseat.com.br/) (01/06 a 07/06 de 2020)

- Semana Internacional do Meio Ambiente - 01/06/2020 a [05/06/2020](https://pt.wikipedia.org/wiki/Dia_Mundial_do_Ambiente)
- Marketplace para conectar empresas e entidades às pessoas que estão descartando resíduos
- Entidades poderão cadastrar pontos de coleta

-------------------------

## Rodando a Aplicação Web:

### Instalando dependências pelo npm

#### Abra o Terminal e navegue até a pasta server e web 

Execute o comando em cada uma das pastas: 

```
 npm install
```

### Rode o back-end pelo terminal dentro da pasta server:

```
 npm run dev // ou yarn dev
```

### Rode o front-end pelo terminal dentro da pasta web:

```
 npm start // ou yarn start
```
----------------------------------
## Conceitos Gerais

### API RESTful

- API dentro dos padrões [REST](https://pt.wikipedia.org/wiki/REST) - Representational State Transfer

#### REST

- /users
- Dados dos usuários (JSON)

#### Back-end - Node.js

- Regras de Negócio
- Conexão com banco de dados
- Envio de e-mails ou conexão com serviços externos
- Autenticação e autorização dos usuários
- Criptografia e segurança

#### Front-end - React.js

- Listagem de usuários (HTML & CSS)

#### Mobile - React Native

- Telas Mobile

### Typescript

- Superset do Javascript
- Introdução de Tipagem estática
- Maior segurança na aplicação por conta de prevenir erros de tipagem

### React

- Biblioteca (*library*) para construção de interfaces (*UI*)
- Utilizado para construção de Single Page Applications (*SPA*)
- Podemos considerar um framework? **Sim! O ecossistema faz com que o React possa ser considerado um framework**
- Tudo no React é Javascript!
- React | ReactJS | React Native

#### Vantagens do React

- Organização do código
    - Componentização
- Divisão de responsabilidades
    - Back-end: Regra de negócio
    - Front-end: Interface
- Uma API, múltiplos clientes

### React Native

- Uma única base de código para iOS e Android
- O código não é convertido, transpilado, para linguagens nativas
- O Javascript Core faz com que o iOS e o Android interpretem Javascript

### [Expo](https://blog.rocketseat.com.br/expo-react-native/)

- Não é necessário ambiente específico
    - ~~Android Studio + SDK~~
    - ~~Xcode + SDK~~
- Facilitador para acessar recursos nativos
- Não necessita geração de .apk ou .ipa
- O Expo é capaz de interpretar todo o código React Native

## Back-end

### Rotas e Recursos

- Rota: Endereço completo da requisição (http://localhost:3333/users)
- Recurso: Entidade da aplicação/sistema 

### Métodos HTTP

- GET: Busca informações do back-end
- POST: Insere novas informações no back-end
- PUT: Atualiza informações no back-end
- DELETE: Remove informações no back-end

### Params

- request.body: Parâmetros que chegam através do corpo da requisição
- request.params: Identificam um recurso requerido pela própria rota
- request.query: Parâmetros adicionados a rota, geralmente opcionais. Servem para realização de filtros, paginação e etc


### Banco de Dados

- SQL: Postgres, MySQL, **SQLite**, SQL Server
- NoSQL: MongoDB, CouchDB

#### [Knex.js](http://knexjs.org/)

- Lib que permite trabalhar com banco SQL com linguagem unificada
- Suporte a muitos Bancos de Dados
- Query escrita em Javascript (query builder)

#### Exemplo:

        SELECT * FROM users WHERE name = 'Luis'

        knex('users').where('name', 'Luis').select('*')

#### Tabelas

- points (Pontos de Coleta)
    - name
    - image
    - email
    - whatsapp
    - latitude
    - longitude
    - city
    - uf
- items (Itens para Coleta)
    - title
    - image
- point_items (Quais itens um ponto coleta?)
    - point_id
    - item_id

#### Migrations

- Histórico do Banco de Dados

### Funcionalidades da Aplicação

- Cadastro de Ponto de Coleta
- Listar os Itens de Coleta
- Listar Pontos (filtro por estado/cidade/itens)
- Listar um único Ponto de Coleta pela id

### Padrões de Métodos Controller

- index: Listagem de registros
- show: Um único registro
- create/store: Cria ou armazena novos registros
- update: Atualiza um registro existente
- delete/destroy: Remove um registro existente

### Outros Padrões de Projetos

- Service Pattern
- Repository Pattern/Data Mapper

### CORS - Cross Origin Resource Sharing

- Define quais endereços externos podem acessar a aplicação
