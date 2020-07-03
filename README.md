<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src="./web/src/assets/logo.svg" width="220px" />
</h1>

<p align="center">
  <a href="https://github.com/capelaum/Ecoleta/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/capelaum/Ecoleta?style=social">
  </a>
  <img alt="PRs welcome!" src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" />
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/capelaum/Ecoleta?color=%2304D361">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/capelaum/Ecoleta">
	
  <a href="https://github.com/capelaum/Ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/capelaum/Ecoleta">
  </a>
  
  <a href="https://www.linkedin.com/in/luis-capelletto/">
    <img alt="Made by capelaum" src="https://img.shields.io/badge/made%20by-capelaum-%2304D361">
  </a>
</p>

<p align="center">
  <a href="#seedling-Ecoleta---Aplicação-de-Pontos-de-Coleta-de-Resíduos">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Conceitos-Gerais">Conceitos Gerais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

# Aplicação de cadastro de Pontos de Coleta

O Ecoleta é um marketplace que ajuda pessoas a encontrarem pontos de coleta de resíduos de forma eficiente.

- Semana Internacional do Meio Ambiente - 01/06/2020 a [05/06/2020](https://pt.wikipedia.org/wiki/Dia_Mundial_do_Ambiente)
- Marketplace para conectar empresas e entidades às pessoas que estão descartando resíduos
- Entidades poderão cadastrar pontos de coleta

<h1 align="center">
    <img alt="Example" title="Example" src=".github/capa.svg" width="600px" />
</h1>

## 🔖 Layout

Você pode visualizar o layout do projeto no formato através desse [link](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/). Lembrando que você irá precisar ter uma conta no [Figma](https://www.figma.com/).

## O que é Next Level Week?

<h3 align="center">01/06 a 07/06 de 2020</h3>

<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="250px" />
</h1>

NLW é um evento online de graça que ocorre durante uma semana de conteúdo prático de programação e networking com um objetivo: te levar ao próximo nível.

## Organizado pela [Rocketseat](rocketseat.com.br)

## Tecnologias

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## Como usar

### Para rodar a aplicação Web você precisa ter instalado no PATH do seu ambiente: 

- [Git](https://git-scm.com)
- [Node.js][nodejs] + [Yarn][yarn]

## 💻 Rodando a Aplicação Web:

```
# Clone o repositorio
git clone https://github.com/capelaum/Ecoleta
```

### Instale dependências pelo npm ou yarn

Execute o comando install dentro de cada uma das pastas server e web: 

```
 # yarn install
 npm install
```

### Rode o Back-end pelo Terminal dentro da pasta server:

```
# Configurando banco de dados com SQLite

# Migrações
yarn knex:migrate

# Seeds
yarn knex:seed

# Execute
# yarn dev
npm run dev 

backend running on port 3333
```

<p align="center">
	<a href="https://insomnia.rest/run/?label=NLW%201.0%20-%20Ecoleta&uri=https%3A%2F	%2Fraw.githubusercontent.com%2Fcapelaum%2FEcoleta%2Fmaster%2Fserver%2FInsomnia_2020-06-05.json" target="_blank">
	<img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

### Rode o Front-end pelo Terminal dentro da pasta web:

```
 # yarn start
 npm start 
 
frontend running on port 3000
```

### Basta acessar http://localhost:3000 e ver a aplicação 

### :iphone: Rodando a versão Mobile 

#### Para rodar a aplicação mobile você precisa ter instalado o aplicativo [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) no seu celular, tem tanto versão IOS quanto Android

### Pelo Terminal dentro da pasta mobile:

```
# Instale dependências
# npm install
yarn install

# Execute
# npm start
yarn start

# Expo irá abrir, em seguida escaneie o QR Code pelo terminal ou pela página do Expo

# Caso tenha algum problema com fontes, execute:
expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

Outra forma é abrir pelo app do expo no celular e clicar no símbolo de '+' no canto superior direito da tela do celular e colocar a url expo que aparece acima do QR Code

----------------------------------

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


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

