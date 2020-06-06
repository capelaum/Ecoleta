<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="250px" />
</h1>

<h4 align="center"> 
	:construction: NextLevelWeek 1.0 🚀 In progress.. :construction:
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/capelaum/Ecoleta?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/capelaum/Ecoleta">
	
  <a href="https://www.linkedin.com/in/luis-capelletto/">
    <img alt="Made by capelaum" src="https://img.shields.io/badge/made%20by-capelaum-%2304D361">
  </a>

  <a href="https://github.com/capelaum/Ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/capelaum/Ecoleta">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/capelaum/Ecoleta/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/capelaum/Ecoleta?style=social">
  </a>
</p>

<p align="center">
 <a href="https://insomnia.rest/run/?label=NLW%201.0%20Ecoleta&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDanielObara%2FNLW-  1.0%2Fmaster%2Fbackend%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center">
  <a href="#seedling-Ecoleta---Aplicação-de-Pontos-de-Coleta-de-Resíduos">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Conceitos-Gerais">Conceitos Gerais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<h1 align="center">
	Projeto da Next Level Week 1.0 (01/06 a 07/06 de 2020)
</h1>

## O que é Next Level Week?

NLW é um evento online de graça que ocorre durante uma semana de conteúdo prático de programação e networking com um objetivo: te levar ao próximo nível.

## Organizado pela [Rocketseat](rocketseat.com.br)

## Tecnologias

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

# :seedling: Ecoleta - Aplicação de Pontos de Coleta de Resíduos 

- Semana Internacional do Meio Ambiente - 01/06/2020 a [05/06/2020](https://pt.wikipedia.org/wiki/Dia_Mundial_do_Ambiente)
- Marketplace para conectar empresas e entidades às pessoas que estão descartando resíduos
- Entidades poderão cadastrar pontos de coleta

<h1 align="center">
    <img alt="Example" title="Example" src=".github/capa.svg" width="500px" />
</h1>

## 🔖 Layout

Pra acesso ao layout use [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/).

## 💻 Como usar

### Para Rodar essa aplicação você precisa ter instalado no PATH do seu ambiente: 

- [Git](https://git-scm.com)
- [Node.js][nodejs] + [Yarn][yarn]

## Rodando a Aplicação Web:

```
# Clone o repositorio
git clone https://github.com/capelaum/Ecoleta
```

### Instalando dependências pelo npm

Execute o comando install dentro de cada uma das pastas server e web: 

```
 npm install
 # ou yarn install
```

### Rode o Back-end pelo Terminal dentro da pasta server:

```
 npm run dev 
 # ou yarn dev
 
 backend running on port 3333
```

### Rode o Front-end pelo Terminal dentro da pasta web:

```
 npm start 
 # ou yarn start
 
 frontend running on port 3000
```

### Basta acessar http://localhost:3000 e ver a aplicação 
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

## 🤔 Como contribuir

- Fazer um fork;
- Criar um branch com sua feature: `git checkout -b my-feature`;
- Commit: `git commit -m 'feat: My new feature'`;
- Fazer um push para seu branch: `git push origin my-feature`.
- Realizar um pull request

Caso seja aceito, haverá um merge para o master e assim poderá deletar seu branch

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/capelaum/Ecoleta/blob/master/LICENSE) for details.

Made with ♥ by capelaum :wave: [Get in touch!](https://www.linkedin.com/in/luis-capelletto/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

