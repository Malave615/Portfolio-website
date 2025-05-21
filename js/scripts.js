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
  // For detailed-contact-form
  const emailInputDetailed = document.querySelector('#contact-email');
  const detailedForm = document.querySelector('#detailed-contact-form');

  if (emailInputDetailed && detailedForm) {
    emailInputDetailed.addEventListener('input', () =>
      validateEmail(emailInputDetailed),
    );

    detailedForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isEmailValid = validateEmail(emailInputDetailed);
      const isPasswordValid = true;

      if (isEmailValid && isPasswordValid) {
        alert('Form submitted!');
        detailedForm.submit();
      }
    });
  }

  // Active nav highlighting
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.navigation-list li a');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');

    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Grid item text expansion
  const gridItems = document.querySelectorAll('.grid_item');

  gridItems.forEach((gridItem) => {
    const text = gridItem.querySelector('p');

    // Add click event to toggle text expansion
    gridItem.addEventListener('click', () => {
      text.classList.toggle('show-more');
    });
  });
});
