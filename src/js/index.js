const questionContainer = document.querySelector('.container__question')
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
            answer.style.display = 'block'
        }else{
            answer.style.display = 'none'
        }
    }
}
