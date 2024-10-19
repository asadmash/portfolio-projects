let acc = document.getElementsByClassName('accordion');
// header logo container
let headerLogoContainer = document.getElementById('int-header');
// Mobile navigation opener
let mobileNavOpenBtn = document.querySelector('.mobile-nav-logo-open')
console.log("🚀 ~ mobileNavOpenBtn:", mobileNavOpenBtn)
let mobileNavCloseBtn = document.querySelector('.mobile-nav-close-btn')
// mobile navigation menu
let mobileNavMenu = document.querySelector('.navigation');
console.log("🚀 ~ mobileNavMenu:", mobileNavMenu);
// main container
let mainContainer = document.querySelector('#main');



// mobile nav menu open
mobileNavOpenBtn.addEventListener('click', () => {
    console.log('clicked');
mobileNavMenu.classList.remove('hidden');
// hide the header
headerLogoContainer.classList.add('hidden');
mainContainer.classList.add('fixed');
});
// mobile nav menu close
mobileNavCloseBtn.addEventListener('click', () => {
    mobileNavMenu.classList.add('hidden');
    // show the header
    headerLogoContainer.classList.remove('hidden');
    mainContainer.classList.remove('fixed');
})


// function mobileNavMenuOpen() {
// mobileNavMenu.classList.remove('hidden');
// console.log('clicked');

// }



// FAQ sections questions arrow open close animation logic
for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        var arrow = this.children[0];
        var svg = arrow.children[0];
        var path = svg.children[0];
        console.log(path);
        
        if(panel.classList.contains('block')){
            panel.classList.remove('block')
            panel.classList.add('hidden');
            arrow.style.transform = 'rotate(0deg)';
            path.style.stroke = '#5267DF';
        } else {
            this.style.borderBottom = '0';
            panel.classList.remove('hidden');
            panel.classList.add('block');
            arrow.style.transform = 'rotate(180deg)';
           path.style.stroke = '#fa5757';
        }
    });
}

// add the functionality to toggle the mobile nav
