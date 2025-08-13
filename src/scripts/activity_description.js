const activities = document.querySelectorAll('.activity-card')

activities.forEach(activity => {
    const button = activity.querySelector('.activity-button')
    const description = activity.querySelector('.description-container')
    button.addEventListener('click', ()=> {description.classList.toggle('hidden')})
})