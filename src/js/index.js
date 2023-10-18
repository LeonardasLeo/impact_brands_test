const questionContainer = document.querySelector('.container__question')
const slides = document.querySelectorAll('.swiper-slide')
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

questionContainer.onclick = (e) => {
    if (e.target.classList.contains('question')){
        const answer = e.target.nextElementSibling
        if (answer.style.display === 'none'){
            answer.style.display = 'flex'
        }else{
            answer.style.display = 'none'
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

