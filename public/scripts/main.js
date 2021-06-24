import Modal from './modal.js'

const modal = Modal()

//pegar quando o marcar como lido for clicado
//pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//ele vai percorrer todos os checkButtons, e adicionar alguma coisa a eles.
checkButtons.forEach(button => {
    //adicionar escuta
    button.addEventListener('click', event => {
        //abrir modal
        modal.open()
    })
})

// Quando o botão delete for clicado ele abri a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', event => {
        modal.open()
    })
})