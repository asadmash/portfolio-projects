
// ************ DOM ELEMENETS ****************

let acc = document.getElementsByClassName("accordion");
// header logo container
let headerLogoContainer = document.getElementById("int-header");
// MOBILE MENU OPEN BUTTON
let mobileNavOpenBtn = document.querySelector(".mobile-nav-logo-open");
// MOBILE MENU CLOSE BUTTON
let mobileNavCloseBtn = document.querySelector(".mobile-nav-close-btn");
// mobile navigation menu
let mobileNavMenu = document.querySelector("#mb-nav-wrapper");
console.log("🚀 ~ mobileNavMenu:", mobileNavMenu);
// main container
let mainContainer = document.querySelector("#main");

// ************ DOM ELEMENETS ****************








// ************* EVENT LISTENERS **********************

// mobile nav menu open
mobileNavOpenBtn.addEventListener("click", mbNavOpen);

// mobile nav menu close
mobileNavCloseBtn.addEventListener("click", mbNavClose);

// ************* EVENT LISTENERS **********************










// ***************** FUNCTIONS ********************** //



// >>>>>>>>>> MOBILE NAV MENU FUNC >>>>>>>>>>>>>>>>>>>>>
function mbNavOpen() {
  mobileNavMenu.classList.remove("hidden");
  // hide the header
  headerLogoContainer.classList.add("hidden");
  // disable vertical scrolling of body elements
  mainContainer.classList.add("fixed");
}

function mbNavClose() {
  mobileNavMenu.classList.add("hidden");
  // show the header
  headerLogoContainer.classList.remove("hidden");
  // enable vertical scrolling
  mainContainer.classList.remove("fixed");
}

// <<<<<<<<<<<< MOBILE NAV MENU FUNC <<<<<<<<<<<<<<<<<<<<<



// >>>>>>>>>>> FAQ SECTIONS FUNC >>>>>>>>>>>>>>>>>>>
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var arrow = this.children[0];
    var svg = arrow.children[0];
    var path = svg.children[0];
    console.log(path);

    if (panel.classList.contains("block")) {
      panel.classList.remove("block");
      panel.classList.add("hidden");
      arrow.style.transform = "rotate(0deg)";
      path.style.stroke = "#5267DF";
    } else {
      this.style.borderBottom = "0";
      panel.classList.remove("hidden");
      panel.classList.add("block");
      arrow.style.transform = "rotate(180deg)";
      path.style.stroke = "#fa5757";
    }
  });
}

for(let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function(){
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    var arrow = this.children[0];
    var svg = arrow.children[0];
    var path = svg.children[0];
    console.log(path);
  })
}
// <<<<<<<<<<<<<<<<<<< FAQ SECTIONS FUNC <<<<<<<<<<<<<<<
