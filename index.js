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
  loader.src = '../../images/loader.gif';
  loader.alt = 'loader gif while the data loads';
  loader.width = 60;
  loader.height = 60;
  loadingContainer.append(loader);
};