//aqui estamos importando o express
const express = require('express')

//aqui passamos para a const route a rota do express
const route = express.Router()

//aqui falamos que a rota que ele vai pegar ele precisa adicionar uma barra e pegar o arquivo index que esta na pasta view.
route.get('/', (req, res) => res.render('index'))

//aqui estamos exportando a route
module.exports = route