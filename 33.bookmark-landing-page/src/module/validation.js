const emailEl = document.querySelector('.emailEl');
// const emailContainer = document.querySelector('.email-container');
const contactBtn = document.querySelector('.contact-btn');
const msg = document.querySelector('.msg');
const form = document.querySelector('.contact-form')


// prevent email field left empty
const isRequired = value => value === '' ? false: true;

// check the email is valid or not
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// error message function
const showError = (input, message) => {
    // get the email inputs parent
    const emailContainer = emailEl.parentElement;

    // add error class
emailContainer.classList.remove('success');
emailContainer.classList.add('error');

// remove outline at typing
emailEl.style.outline = 'none';

// show ther error message
const error = emailContainer.querySelector('small');
error.textContent = message;
}

// success message function
const showSuccess = (input) => {
    const emailContainer = input.parentElement;

    // remove the error class
    emailContainer.classList.remove('error');
    emailContainer.classList.add('success');
    emailEl.style.outline = 'none';
    // hide the error message
    const error = emailContainer.querySelector('small');
    error.textContent = '';
}

// validate the email field
const checkEmail = () => {
    // initial value
    let valid = false;
    // get the actual value of email field
    const email = emailEl.value.trim();
    // check for empty email
    if(!isRequired(email)){
        showError(emailEl, 'Email can not be blank.');
    } else if (!isEmailValid(email)){
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function (e){
    e.preventDefault();
    // validate forms
    let isEmailValid = checkEmail();
    if(isEmailValid){

    }
});

// instant feedback
// form.addEventListener('input', funciton (e){
    
// });

form.addEventListener('input', function(e){
    switch (e.target.id){
        case 'email':
            checkEmail();
            break;
    }
})