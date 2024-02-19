function showErrorMessage(input, message) {
    'use-strict';
    let container = input.parentElement;
    let error = container.querySelector('error-message');

    if (error) {
        container.removeChild(error);
    }

    if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
    }
}

function validateEmail() {
    'use-strict';
    let value = emailInput.value;
    let hasAtSign = value.indexOf('@') > -1;
    let hasDot = value.indexOf('.') > -1;
    return value && hasAtSign && hasDot;

    if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
    }
    if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
    }
    if (value.indexOf('.') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
    }
    showErrorMessage(emailInput, null);
    return true;
}

/*function validatePassword() {
    let value = passwordInput.value;
    return value && value.length >= 8;

    if (!value) {
        showErrorMessage(passwordInput, 'Password is a required field.');
        return false;
    }
    if (value.length < 8) {
        showErrorMessage(passwordInput, 'Password needs to be at least 8!');
        return false;
    }
    showErrorMessage(passwordInput, null);
    return true;
}*/






emailInput.addEventListener('input', validateEmail);
//passwordInput.addEventListener('input', validatePassword);