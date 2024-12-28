function showErrorMessage(input, message) {
  'use-strict';

  const container = input.parentElement;
  const error = container.querySelector('error-message');

  if (error) {
    container.removeChild(error);
  }

  if (message) {
    const error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    container.appendChild(error);
  }
}

function validateEmail() {
  'use-strict';

  const emailInput = document.querySelector('#email');
  const { value } = emailInput;
  const hasAtSign = value.indexOf('@') > -1;
  const hasDot = value.indexOf('.') > -1;

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

/* function validatePassword() {
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
} */

const emailInput = document.querySelector('#email');
emailInput.addEventListener('input', validateEmail);
// passwordInput.addEventListener('input', validatePassword);
