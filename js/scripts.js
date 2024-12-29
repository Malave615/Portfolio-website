function showErrorMessage(input, message) {
  'use-strict';

  const container = input.parentElement;
  const error = container.querySelector('.error-message');

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
  if (!hasAtSign || !hasDot) {
    showErrorMessage(emailInput, 'You must enter a valid email address.');
    return false;
  }
  showErrorMessage(emailInput, null);
  return true;
}

function validatePassword() {
  'use-strict';

  const passwordInput = document.querySelector('#password');
  const { value } = passwordInput;

  if (!value) {
    showErrorMessage(passwordInput, 'Password is a required field.');
    return false;
  }
  if (value.length < 8) {
    showErrorMessage(
      passwordInput,
      'Password needs to be at least 8 characters.',
    );
    return false;
  }
  showErrorMessage(passwordInput, null);
  return true;
}

const emailInput = document.querySelector('#contact-email');

emailInput.addEventListener('input', validateEmail);

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    form.submit();
    alert('Form submitted!');
  }
});

// Add event listener to grid items for text expansion
document.addEventListener('DOMContentLoaded', () => {
  const gridItems = document.querySelectorAll('.grid_item');

  gridItems.forEach((gridItem) => {
    const text = gridItem.querySelector('p');

    // Add click event to toggle text expansion
    gridItem.addEventListener('click', () => {
      text.classList.toggle('show-more');
    });
  });
});
