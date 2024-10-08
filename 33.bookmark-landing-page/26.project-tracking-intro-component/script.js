const barHolder = document.querySelector('#bar');
const bars = document.querySelectorAll('.bar');
const navList = document.querySelector('#nav-holder');

barHolder.addEventListener('click', toggleNav);

function toggleNav() {
   
  if (barHolder.classList.contains('toggle')) {
    // Hide the navigation bars
    barHolder.classList.remove('toggle');
    bars[1].style.display = 'block';
    bars[0].style.transform = 'rotate(0deg) translate(0%)';
      bars[2].style.transform = 'rotate(0deg) translate(0%)';
      navList.style.right = '-1000px';
      
  } else {
    // Show the navigation bars
    barHolder.classList.add('toggle');
    bars[1].style.display = 'none';
    bars[0].style.transform = 'rotate(45deg) translate(20%)';
      bars[2].style.transform = 'rotate(-45deg) translate(20%)';
      navList.style.right = '10%';
  }
}
