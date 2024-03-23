// impimenting slide gallary feature
const slides = document.querySelectorAll('.slide')
// grab those prev and next btn to change image
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Thumb reference
const thums = document.querySelectorAll('.thum');
const thum1 = document.querySelector('.thum1');
const thum2 = document.querySelector('.thum2');
const thum3 = document.querySelector('.thum3');
const thum4 = document.querySelector('.thum4');

// image ref
const allImage = document.querySelectorAll('.thumb-img');

// cartbox ref
const cartCont = document.querySelector('.cart-container');
const cartBtn = document.querySelector('#cart');

// Cart ref to update value according to users prduct price and quantity
const cartItemCount = document.querySelector('.cart-item-count');
const cartItemPrice = document.querySelector('.cart-item-price');
const addCartBtn = document.querySelector(".add-cart-btn");

// order quantity ref
const decreseBtn = document.querySelector('.decrease');
const increseBtn = document.querySelector('.increase')
const displayCount = document.querySelector('.count');

const discountPrice = document.querySelector('.discount-price');
// console.log("🚀 ~ discountPrice:", discountPrice);

// profile ref
const profile = document.querySelector('#profile');
const profCont = document.querySelector('#user-profile');


// Add event listener to the slide button
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Add even listener to cart cont
cartBtn.addEventListener('click', cartToggle);


// Add event listener to order incress decrese count
increseBtn.addEventListener('click', increseCount);
decreseBtn.addEventListener('click', decreseCount);

// Add event listener to add cart button
addCartBtn.addEventListener('click', updateCart)

// STEP: Add Event listener to profile 
profile.addEventListener('click', profileToggle);




// Toggle cart container function
function cartToggle(){
  // console.log(cartBtn);
  if(profCont.classList.contains('active')){
    profCont.style.display = 'none';
    profCont.classList.remove('active')
  }
  if(!cartCont.classList.contains('active')) {
    cartCont.style.display = 'block';
    cartCont.classList.add('active');
  } else {
    cartCont.style.display = 'none';
    cartCont.classList.remove('active')
  }
}

// STEP: Toggle profile function
function profileToggle(){
  if(cartCont.classList.contains('active')){
    cartCont.style.display = 'none';
    cartCont.classList.remove('active');
  }
  if(!profCont.classList.contains('active')){
    profCont.style.display = 'block';
    profCont.classList.add('active');
  } else{
    profCont.style.display = 'none';
    profCont.classList.remove('active');
  }
}

// STEP: Functionality for gallery images

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    const slideWidth = slide.clientWidth;
    slide.style.transform = `translateX(-${index * slideWidth}px)`;
  });
}


function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Function for thumbnail navigation
function displaySlide(index) {
  showSlide(index);
  thums.forEach(thum => thum.classList.remove('active'));
  thums[index].classList.add('active');
}

// Add click events to thumbnails
thums.forEach((thum, index) => {
  thum.addEventListener('click', () => displaySlide(index));
});


showSlide(0);


// STEP: ORDER QUANTITY COUNT FUNCTIONALITIES ************

let countValue = displayCount.value;
let discountValue = 125;
countValue = 1;
// console.log("🚀 ~ countValue:", countValue)
function increseCount(){
countValue = countValue + 1;
displayCount.textContent = countValue;
discountValue += 125;
discountPrice.textContent = `$${discountValue}`;
// console.log("🚀 ~ increseCount ~ discountPrice:", discountPrice)
}
function decreseCount(){
  if(displayCount.textContent > 1) {
  countValue = countValue - 1;
  displayCount.textContent = countValue - 1;
} else{
  console.warn('nagetive value not allowed');
}
if(discountValue > 125){
  discountValue -= 125;
  discountPrice.textContent = `$${discountValue}`;
}
}


//STEP: update cart
function updateCart(){
  cartItemCount.textContent = countValue;
  cartItemPrice.textContent = `$${discountValue}`;
  console.log("🚀 ~ updateCart ~ cartItemPrice:", cartItemPrice)
}