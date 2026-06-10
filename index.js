const moreInfoButtons = document.querySelectorAll('.more-info-button');

for (const moreInfoButton of moreInfoButtons) {
  moreInfoButton.addEventListener('click', (event) => {
    const popupSection = event.currentTarget.parentElement.nextElementSibling;
    popupSection.style.display = 'block';
  });
}

const closePopupButtons = document.querySelectorAll('.close-popup-button');

for (const closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener('click', (event) => {
    console.log(event.target);
    const popupSection =
      event.currentTarget.parentElement.parentElement.parentElement;
    popupSection.style.display = 'none';
  });
}

const createLoadingContainer = function () {
  const loadingContainer = document.querySelector('.loading-container');
  const loader = document.createElement('img');
  loader.src = './images/loader.gif';
  loader.alt = 'loader gif while the data loads';
  loader.width = 60;
  loader.height = 60;
  loadingContainer.append(loader);
};

const form = document.getElementById("Contact");
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  form.reset(); 
});

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  let isValid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  [nameError, emailError, messageError].forEach(err => err.textContent = '');

  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (message.value.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
  if (isValid) {
    form.reset(); 
  }

});
