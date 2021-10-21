/* Form Validation */
const form = document.getElementById("form");
const username = document.getElementById("username");
const address = document.getElementById("address");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    } else { 
        setSuccessFor(username)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
