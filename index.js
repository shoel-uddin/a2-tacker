require('dotenv').config();

const http = require('http')
const express = require('express')
const morgan = require("morgan")
const helmet = require("helmet")
const logger = morgan("dev")

const app = express()
const server = http.createServer(app)

app.use(logger)
app.use(helmet())
app.use(express.urlencoded({extended: true}))

const port = 3300
const host = 'localhost'

app.use(express.static("public"))

// Needed for Templates 
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

//Needed for bcryptjs
const bcrypt = require('bcryptjs')

// Needed for templates rendering
app.get('/', (req, res) => {
    res.render('homePage')
})
app.get('/a2list', (req,res)=>{
    res.render('a2TrackerList')
})

//catch all if website doesn't
app.get('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

server.listen(port, host, () => {
    console.log(`Running on ${host}: ${port}`)
})


