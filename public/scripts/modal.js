export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener('click', close)

    function open(){
        //função de abrir o modal
        modalWrapper.classList.add('active')
    }
    function close(){
        //função de fechar o modal
        modalWrapper.classList.remove('active')
    }

    return{
        open,
        close
    }
}