function validateEmail(emailInput) {
  'use-strict';

  const { value } = emailInput;
  const hasAtSign = value.includes('@');
  const hasDot = value.includes('.');

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
    showErrorMessage(passwordInput, 'Password needs to be at least 8 characters.');    );
    return false;
  }

  showErrorMessage(passwordInput, null);
  return true;
}

function showErrorMessage(input, message) {
  const spanError = document.querySelector(`#${input.id}-error`);

  if (spanError) {
    spanError.textContent = message || '';
  } else {
    const parent = input.parentElement;
    let dynamicError = parent.querySelector('.error-message');

    if (dynamicError) {
      dynamicError.remove();
    }

    if (message) {
      dynamicError = document.createElement('div');
      dynamicError.classList.add('error-message');
      dynamicError.innerText = message;
      parent.appendChild(dynamicError);
    }
  }
}

// Run validation live on input
document.addEventListener('DOMContentLoaded', () => {
  // For basic contact form
  const emailInputBasic = document.querySelector('#email');
  const basicForm = document.querySelector('#basic-contact-form');

  emailInputBasic.addEventListener('input', () =>
    validateEmail(emailInputBasic),
  );

  basicForm.addEventListener('submit', (e) => {
    if (!validateEmail(emailInputBasic)) {
      e.preventDefault();
    }
  });

  // For detailed-contact-form
  const emailInputDetailed = document.querySelector('#contact-email');
  const detailedForm = document.querySelector('#detailed-contact-form');

  emailInputDetailed.addEventListener('input', () => validateEmail(emailInputDetailed));
  detailedForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(emailInputDetailed);
    const isPasswordValid = true;

    if (isEmailValid && isPasswordValid) {
      alert('Form submitted!');
      detailedForm.submit();
    }
  });
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
