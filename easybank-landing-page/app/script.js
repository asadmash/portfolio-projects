// toggle mobile nav link
const hamburgerBtn = document.getElementById('hamburger-btn');
console.log("🚀 ~ hamburgerBtn:", hamburgerBtn)
const closeBtn = document.querySelector('#close-btn');
console.log("🚀 ~ closeBtn:", closeBtn)
const navMenu = document.querySelector('.nav-menu-mobile')
console.log("🚀 ~ navMenu:", navMenu)

hamburgerBtn.addEventListener('click', showNav);
closeBtn.addEventListener('click', hideNav);

function showNav(){
    hamburgerBtn.classList.add('hide');
    closeBtn.classList.remove('hide');
    navMenu.classList.remove('hide');

}

function hideNav(){
    hamburgerBtn.classList.remove('hide');
    closeBtn.classList.add('hide');
    navMenu.classList.add('hide');
}