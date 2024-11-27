const email = document.getElementById('email');
const subscribeBtn = document.getElementById('sub-btn');

const text = document.getElementById('text');
const pattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = email.value;
    if (emailValue.match(pattern)) {
        window.location.href = 'success.html';
    } else if (emailValue === '') {
        email.style.border = '1px solid red';
        text.innerText = 'empty email!';
        text.style.color = 'red';
    } else {
        email.style.border = 'none';
    }
});



email.addEventListener('input', () => {
    const emailValue = email.value;
    setTimeout(() => {
        if (emailValue.match(pattern)) {
            text.innerText = 'Valid email';
            text.style.color = 'green';
        } else {
            text.innerText = 'Invalid email';
            text.style.color = 'red';
        }
        if (emailValue === '') {
            text.innerText = '';
        }
    }, 500);
});



// const form = document.getElementById('form');
// const email = document.getElementById('email');
// const subscribeBtn = document.getElementById('sub-btn');
// const dismissBtn = document.getElementById('dismiss-btn');
// const text = document.getElementById('text');
// const pattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;

// email.addEventListener('input', validation);
// subscribeBtn.addEventListener('click', checkEmailValidity);
// dismissBtn.addEventListener('click', dismiss);

// function validation() {
//     const emailValue = email.value;
//     setTimeout(() => {
//         if (emailValue.match(pattern)) {
//             text.innerText = 'valid email';
//             text.style.color = 'green';
//         } else {
//             text.innerHTML = 'invalid email';
//             text.style.color = 'red';
//         }
//         if (emailValue === '') {
//             text.innerHTML = '';
//         }
//     }, 500);
// }

// function checkEmailValidity(e) {
//     e.preventDefault();
//     const emailValue = email.value;
//     if (emailValue.match(pattern)) {
//         window.location.href = 'success.html';
//     }
// }

// function dismiss(e) {
//     e.preventDefault();
//     window.location.href = 'index.html';
// }

