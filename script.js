
// Código pro menu humburguinho 

function mudouTamanho() {
    if (window.innerWidth >= 768) {
    itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
   if (itens.style.display == 'block') {
    itens.style.display = 'none'
   } else {
    itens.style.display = 'block'
   }
}

// Código para o carrocel de imagens

window.onload = function() {
    showSlider(); 
};

const slider = document.querySelectorAll('.img-slider');  
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlider();
    currentSlide = (currentSlide + 1) % slider.length;
    showSlider();
}

function prevSlider() {
    hideSlider();
    currentSlide = (currentSlide - 1 + slider.length) % slider.length;
    showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);