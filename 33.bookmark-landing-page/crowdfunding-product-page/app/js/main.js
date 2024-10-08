// select element
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navLink = navMenu.querySelectorAll('.nav-link');
const button = document.querySelectorAll('button');

const modal = document.querySelector('#modal');
const modalCloseBtn = document.querySelector('#close-modal');

const radioBtns = document.querySelectorAll('input[type = "radio"]')


const productSelection = document.querySelectorAll('.product-selection');

let parentEl = productSelection.forEach(product => product.parentElement);





// event listener for active hamburger menu
hamburger.addEventListener('click', mobileMenu);

// event listener for close hamburger menu 
navLink.forEach((n) => n.addEventListener('click', closeMenu));

// event listener for open modal
button.forEach(btn => 
    btn.addEventListener('click', openModal)
);

// event listener for close modal
modalCloseBtn.addEventListener('click', closeModal);

// event listener for close modal after click outside modal content
modal.addEventListener('click', closeModalAg);

// radioBtns.forEach(radioBtn => radioBtn.addEventListener('click', radioCheck));

// function for active hamburger menu
function mobileMenu() {
    hamburger.classList.toggle('active');
    
    navMenu.classList.toggle('active');
    
}


// functon for close hamburger menu
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// function for open modal
function openModal() {
    modal.style.display = 'block';
}

// function for close modal
function closeModal() {
        modal.style.display = 'none';
}

// function for close modal if clicked outside of modal content
function closeModalAg(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

for(let i = 0; i < radioBtns.length; i++) {
    radioBtns[i].addEventListener('click', (e) => {
      radioBtns[i].parentElement.classList.toggle('active');
    
      
        for(let j = 0; j < productSelection.length; j++) {
            if(productSelection[j].parentElement.classList.contains('active')) {
                productSelection[j].innerHTML = `
                <hr>
                <p>Enter your pledge</p>
                <div class="product-btn">
                 <input type="text" placeholder="$25">
                 <button class="color-btn continue-btn">continue</button>
                `
            } else {
                productSelection[j].innerHTML = '';
            }
            
        }
    })
}