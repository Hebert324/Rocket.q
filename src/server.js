//aqui estamos importando o express que e um modulo, a route que e um arquivo que criamos, e o path que também e um modulo.
const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

//aqui estamos falando que quem sera responsavel pela view engine que e o no formato o ejs.
server.set('view engine', 'ejs')

//aqui estamos falando para o server usar o express.static que e o conteudo estatica publico do nosso projeto, aonde vaio estar dentro da pasta public.
server.use(express.static("public"))

//aqui passamos o caminho para o server encontrar a pasta view e rodar o index.ejs
//o path pega o caminho da pasta aonde esta nosso projeto aplica um join onde ele vai juntar o dirname que a pasta src e juntar com views que a pasta que queremos pegar. ficando assim rocketq/src/views
server.set('views', path.join(__dirname, 'views'))

//aqui falamos pro server qual a rota ele ira usar que no caso e a o arquivo route.js
server.use(route)

//aqui falamos para o server em qual porta ele ira rodar que no caso e a porta 3000.
server.listen(3000, () => console.log('rodando'))