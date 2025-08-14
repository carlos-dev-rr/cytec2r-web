const cards = document.querySelectorAll('.card-ref')

cards.forEach(card => {
    const button = card.querySelector('.card-button-ref')
    const description = card.querySelector('.card-content-ref')
    button.addEventListener('click', ()=> {
        let content = button.textContent
        description.classList.toggle('hidden')
        content == 'Más información' ? content = 'Minimizar' : content = 'Más información'
        button.textContent = content
    })
})