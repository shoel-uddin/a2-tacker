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

const logger = morgan('dev');

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
- npm i express express-es6-template-engine morgan helmet
- npm i --save-dev nodemon
- npm i bcryptjs 
- npm i dotenv
- npm i sequelize 
- npm i --save-dev sequelize-cli
- npm i pg-hstore pg
- npm i session-file-store express-session

```

## 03 - Create Database

```sh
- npx sequelize-cli init
- npx sequelize-cli model:generate --name yourModelName --attributes name:string,type:string
- npx sequelize-cli db:migrate
```
- When making users make sure to use `hash` as an attribute.
- After migration use `allowNull: false, unique: true` under username to make sure there will be only unique usernames.
- Under has `allowNull: false` so it's not ever left blank.

## Create User

- This is used for the html to create a user
```js
app.get('/create',(req,res)=>{
    res.send(`
<form method="POST">
    <input type="text" name="username" autofocus placeholder="username">
    <br>
    <input type="password" name="password">
    <br>
    <input type="submit" value="Create User">
</form>    
    `);
})
app.post('/create', async (req, res)=>{
    const {
        username,
        password
    } = req.body;
    const hash = bcrypt.hashSync(password, 10)
    try{
        const newUser = await User.create({
            username,
            hash
        })
        console.log(newUser);
    
        res.send('user created')

    } catch (e) {
        res.send(`
        <h1>UserName Is Taken!</h1>
        <br>
        <h1>TRY AGAIN</h1>
        `);
    }
})
```

## Sessions 

- Make sure in package.json has the following after the "scripts
```sh
"nodemonConfig": {
    "ignore": [
      "sessions/*"
    ]
  }
```

## Sequelize 
- 