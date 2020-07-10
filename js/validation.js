// get element 

var email = document.getElementsById('exampleInputEmail1');
var password = document.getElementById('exampleInputPasswords');
var form = document.getElementById('form');
var errorValue = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let errorMessages = []
    if (email.value === '' || name.value == null) {
        errorMessages.push("Email is required")
    }
    if (password.length <= 6) {
        errorMessages.push('Passsword must be longer than six characters');
    }

    if (password === 'password') {
        errorMessages.push('Passsword must not be password');
    }

    if (errorMessages.length > 0) {
        e.preventDefault()
        errorValue.innerText = errorMessages.join(', ')
    }

})