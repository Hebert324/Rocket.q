//aqui estamos importando o express
const express = require('express')

//aqui passamos para a const route a rota do express
const route = express.Router()

//aqui falamos que a rota que ele vai pegar ele precisa adicionar uma barra e pegar o arquivo index que esta na pasta view.
route.get('/', (req, res) => res.render('index'))
//adicionando a rota dos outros arquivos
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

//get e pegar o post e enviar
//formato que o formulario de dentro da modal tem que passar a informação
//route.post('/room/:room/:question/:action')

//aqui estamos exportando a route
module.exports = route
