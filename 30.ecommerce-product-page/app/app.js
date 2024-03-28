// NOTE: DOM REFERENCE AREA

// NOTE: implmenting slide gallary feature
const slides = document.querySelectorAll('.slide')
// STEP: OVERLAY SLIDES
const ovSlides = document.querySelectorAll('.ov-slide')
// NOTE: grab those prev and next btn to change image
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// STEP:OVERLAY PREV NEXT BTN
const ovPrevBtn = document.querySelector('.ov-prev-btn');
const ovNextBtn = document.querySelector('.ov-next-btn');

// Thumb reference
const thums = document.querySelectorAll('.thum');
const thum1 = document.querySelector('.thum1');
const thum2 = document.querySelector('.thum2');
const thum3 = document.querySelector('.thum3');
const thum4 = document.querySelector('.thum4');

const ovThums = document.querySelectorAll('.ov-thum');
// console.log("🚀 ~ ovThums:", ovThums)

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

// STEP: overlay gallery hide ref
const ovCloseBtn = document.querySelector('.close-btn');
const ovGallery = document.querySelector('#ov-gallary');

// STEP: SHOW OVERLAY GALLERY
// thums.addEventListener('click', showOverlay);



// NOTE: EVENT lISTENER AREA

// Add event listener to the slide button
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
// STEP: ADD EVENT LISTENER TO OV SLIDE BTN
ovPrevBtn.addEventListener('click', ovPrevSlide);
ovNextBtn.addEventListener('click', ovNextSlide);



// Add even listener to cart cont
cartBtn.addEventListener('click', cartToggle);


// Add event listener to order incress decrese count
increseBtn.addEventListener('click', increseCount);
decreseBtn.addEventListener('click', decreseCount);

// Add event listener to add cart button
addCartBtn.addEventListener('click', updateCart)

// STEP: Add Event listener to profile 
profile.addEventListener('click', profileToggle);

// STEP: add function with ovclosebtn
ovCloseBtn.addEventListener('click', removeOverlay);

// STEP: SHOW OVERLAY GALLERY

// NOTE: FUNCTION AREA

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

// *************** STEP: GALLERY EFFECTS *************
let currentSlide = 0;
let currentOvSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    const slideWidth = slide.clientWidth;
    slide.style.transform = `translateX(-${index * slideWidth}px)`;
  });
  console.log(slides.length);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Function for thumbnail navigation
function displaySlide(index) {
  showSlide(index);
  thums.forEach(thum => thum.classList.remove('active'));
  thums[index].classList.add('active');
}

function displayOverlaySlide(index, overlaySlides) {
  overlaySlides.forEach((ovSlide, i) => {
    const slideWidth = ovSlide.clientWidth;
    ovSlide.style.transform = `translateX(-${index * slideWidth}px)`;
  });
}



// Add click events to thumbnails
thums.forEach((thum, index) => {
  
  thum.addEventListener('click', () => showOverlay(index, slides, nextSlide, prevSlide)); // Pass  // Assuming your showOverlay function
});

showSlide(0);


// ************************ STEP: OVERLAY ***************

function showOvSlide(index) {
  ovSlides.forEach((ovslide, i) => {
    const slideWidth = ovslide.clientWidth;
    ovslide.style.transform = `translateX(-${index * slideWidth}px)`;
  });
  console.log(ovSlides.length);
}

function ovNextSlide() {
  currentSlide = (currentSlide + 1) % ovSlides.length;
  showOvSlide(currentSlide);
}

function ovPrevSlide() {
  currentSlide = (currentSlide - 1 + ovSlides.length) % ovSlides.length;
  showOvSlide(currentSlide);
}

// Function for thumbnail navigation
function displayOvSlide(index) {
  showOvSlide(index);
  ovThums.forEach(ovThum => ovThum.classList.remove('active'));
  ovThums[index].classList.add('active');
}

function displayOverlaySlide(index, overlaySlides) {
  overlaySlides.forEach((slide, i) => {
    const slideWidth = slide.clientWidth;
    slide.style.transform = `translateX(-${index * slideWidth}px)`;
  });
}



// Add click events to thumbnails
ovThums.forEach((ovThum, index) => {
  ovThum.addEventListener('click', () => displayOvSlide(index));
  // Pass  // Assuming your showOverlay function
});

showOvSlide();

// ************************ STEP: OVERLAY ***************



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


// STEP: remove overlay function
function removeOverlay(){
  ovGallery.classList.add('hide');
}

// STEP: SHOW OVERLAY FUNCTION
// function showOverlay(index){
//   ovGallery.classList.remove('hide');
//   displaySlide(index)
// }

function showOverlay(index, slides, nextSlide, prevSlide) {
  ovGallery.classList.remove('hide');
  currentOvSlide = index;
  displayOverlaySlide(index, ovSlides);
}

