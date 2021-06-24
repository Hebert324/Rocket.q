import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar quando o marcar como lido for clicado
//pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//ele vai percorrer todos os checkButtons, e adicionar alguma coisa a eles.
checkButtons.forEach(button => {
    //adicionar escuta
    button.addEventListener('click', handleClick)
})

// Quando o botão delete for clicado ele abri a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    //quando enviamos o evento de clique ele pega todo o elemento que esta junto ao evento trazendo o o dataset que setamos no HTML
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    //url para onde o formulario vai
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = text
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.innerHTML = check ? "Marcar como lida" : "Sim, excluir"
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    //abrir modal
    modal.open()
}