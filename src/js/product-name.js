const headerText = document.querySelector('.header__text')
const headerButton = document.querySelector('.header__button')
const productBlendHeader = document.querySelector('.product__blend__heard__name')
const question = document.querySelector('.question__product__name')

const productName = '[product name]'

headerText.innerHTML += productName
headerButton.innerHTML += productName
productBlendHeader.innerHTML = productName
question.innerHTML += `${productName}?`