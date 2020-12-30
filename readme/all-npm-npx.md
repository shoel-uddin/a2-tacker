## 01- Create an index.js

```js
require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(logger);

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));


server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
```

## 02 - Run all npm and npx for set up of express app

```sh
- npm init
- npm i express express-es6-templates-engine morgan helmet
- npm i --save-dev nodemon
- npm i bcryptjs 
- npm i dotenv
- npm i sequelize --save-dev sequelize-cli
- npm i pg-hstore pg
- npm i session-file-store express-session

```

## 03 - Create Database

```sh
- npx sequelize-cli model:generate --name yourModelName --attributes name:string,type:string
- npx sequelize-cli db:migrate
```