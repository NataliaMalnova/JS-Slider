window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    
    // SLIDER

    // параметр текущего слайда
    let slideIndex = 1,
     // все слайды
    slides = document.querySelectorAll('.slider-item'),
    // элемент навигации вперед
    prev = document.querySelector('.prev'),
    // элемент навигации назад
    next = document.querySelector('.next'),
    // обертка, для всех навигационных точек
    dotsWrap = document.querySelector('.slider-dots'),
    //все точки, которые используются в работе
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n){

        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for(let i = 0; i < slides.length; i++){
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }  
    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function currentsSlide(n){
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(e) {
        for(let i = 0; i < dots.length + 1; i++){
            if(e.target.classList.contains('dot') && e.target == dots[i-1]){
                currentsSlide(i);
            }
        }
    });

});