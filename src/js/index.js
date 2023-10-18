const questionContainer = document.querySelector('.container__question')
const slides = document.querySelectorAll('.swiper-slide')
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

questionContainer.onclick = (e) => {
    if (e.target.classList.contains('question')){
        const answer = e.target.nextElementSibling
        const answerDisplay = answer.style.display
        const questionArrow = e.target.children[1]
        if (answerDisplay === 'none' || answerDisplay === ''){
            answer.style.display = 'flex'
            questionArrow.className = 'fas fa-chevron-up icon--smallest'
        }else{
            answer.style.display = 'none'
            questionArrow.className = 'fas fa-chevron-down icon--smallest'
        }
    }
}

for (let i = 0; i < slides.length; i++) {
    const singleSlide = slides[i]
    singleSlide.onmouseenter = () => {
        singleSlide.style.cursor = 'grab'
    }
    swiper.on('touchStart', () => {
        singleSlide.style.cursor = 'grabbing'
    })

    swiper.on('touchEnd', () => {
        singleSlide.style.cursor = 'grab'
    })

}

