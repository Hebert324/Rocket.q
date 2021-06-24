//aqui estamos importando o express
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

//aqui passamos para a const route a rota do express
const route = express.Router()

//aqui falamos que a rota que ele vai pegar ele precisa adicionar uma barra e pegar o arquivo index que esta na pasta view.
route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
//adicionando a rota dos outros arquivos
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render('room'))

//get e pegar o post e enviar
//formato que o formulario de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

//aqui estamos exportando a route
module.exports = route
