const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu')

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('change')
});



const question = document.querySelectorAll('.question-contain')

question.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active')
    })
})
