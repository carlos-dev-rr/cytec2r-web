const activities = document.querySelectorAll('.activity-card')

activities.forEach(activity => {
    const button = activity.querySelector('.activity-button')
    const description = activity.querySelector('.description-container')
    button.addEventListener('click', ()=> {
        let content = button.textContent
        description.classList.toggle('hidden')
        button.classList.toggle('buttonOn')
        content == 'Más información' ? content = 'Minimizar' : content = 'Más información'
        button.textContent = content
    })
})