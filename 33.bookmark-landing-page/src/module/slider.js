// This code is responsible to the feature slides
const slideHeading = document.querySelector(".slide-heading");
console.log("🚀 ~ slideHeading:", slideHeading);

const slidePara = document.querySelector(".slide-paragraph");
console.log("🚀 ~ slidePara:", slidePara);

// initial declaration
// an initial variable to track index
let i = 0;

// all the images in a array container
let images = [
  "./images/illustration-features-tab-1.svg",
  "./images/illustration-features-tab-2.svg",
  "./images/illustration-features-tab-3.svg",
];
let slideH = [
  "Bookmark in on click",
  "Inteligent Search",
  "Share your bookmarks",
];
let slideP = [
  "Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button",
  "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
  "Easy share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
];

// time to change interval
let time = 1000;

// pause/play state tracker
let paused = false;

// slider functionality
function handleChange() {
  if (!paused) {
    document.slide.src = images[i];
    slideHeading.textContent = slideH[i];
    slidePara.textContent = slideP[i];
    if (
      i < images.length - 1 &&
      i < slideH.length - 1 &&
      i < slideP.length - 1
    ) {
      i++;
    } else {
      i = 0;
    }
  }
  // slideshow functionality
  setTimeout(handleChange, time);
}

// slideshow pause functionality
function pause() {
  paused = !paused;
}
// load the script at website load
window.onload = handleChange;
