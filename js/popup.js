const popup = document.querySelector('.popup')

const popupOpenButton = document.querySelector('.main-content .open-button')
const popupCloseButton = popup.querySelector('.close-button')
const popupCheck = popup.querySelector('input#chk-modal')

const layout = document.querySelector('.overlay')



function popupOpen() {
  if (popupCheck.checked == false) {
    popupCheck.checked = true;
    popup.classList.add('is-open');
    layout.classList.add('is-open');
    popupOpenButton.style.animation = 'none';
    popupOpenButton.style.opacity = '0'
  }
}

popupOpenButton.addEventListener('click', popupOpen)

function popupClose() {
  if (popupCheck.checked == true) {
    popupCheck.checked = false;
    popup.classList.remove('is-open');
    layout.classList.remove('is-open');
    popupOpenButton.style.opacity = '1'
  }
}

popupCloseButton.addEventListener('click', popupClose)