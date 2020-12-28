## 01- Create an index.js

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