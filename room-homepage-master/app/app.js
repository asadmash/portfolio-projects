// Dom ref for mobile hamburger menu
const hamburgerMenuContainer = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const toggleMenu = document.querySelector('.toggle-menu');

// DOM ref for slider gallery
const slides = document.querySelectorAll('.slide');
const leftSliderBtn = document.querySelector('.prev-btn');
const rightSliderBtn = document.querySelector('.next-btn');


// Event Listener
hamburgerMenuContainer.addEventListener('click', showToggleMenu);
closeMenu.addEventListener('click', hideToggleMenu);

// EVENT LISTENER FOR SLIDER
leftSliderBtn.addEventListener('click', prevSlide);
rightSliderBtn.addEventListener('click', nextSlide);





// Toggle functionality
function showToggleMenu(){
    toggleMenu.classList.remove("hide");
}
function hideToggleMenu(){
    toggleMenu.classList.add('hide');
}

// SLIDER FUNCTIONALITY
let currentSlide = 0;

// slide show 
function showSlide(index) {
slides.forEach((slide, i) => {
    if(i === index){
        slide.style.opacity = 100;
    } else {
        slide.style.opacity = 0;
    }
});
}

// slide to next
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// slide to prev
function prevSlide(){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);