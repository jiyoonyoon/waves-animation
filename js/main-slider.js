const modal = document.querySelector('.modal')

const modalOpenButton = document.querySelector('.main-content-button')
const modalCloseButton = modal.querySelector('.close-button')
const modalCheck = document.querySelector('input#modal-trigger')

const convas = document.querySelector('canvas')
const mainContent = document.querySelector('.main-content')


function modalOpen() {
  if (modalCheck.checked == false) {
    modalCheck.checked = true;
    modal.classList.add('is-checked');
    mainContent.style.opacity = 0;
    $('canvas').css({
      position: 'absolute',
      top: '0%',
      left: '0',
      display: 'block',
      transform: 'scale(1.2)'
    })
  }
}

modalOpenButton.addEventListener('click', modalOpen)

function modalClose() {
  if (modalCheck.checked == true) {
    modalCheck.checked = false;
    modal.classList.remove('is-checked');
    mainContent.style.opacity = 1;
    $('canvas').css({
      position: 'absolute',
      top: '80vh',
      left: '0',
      display: 'block',
      transform: 'scale(1)'
    })
  }
}

modalCloseButton.addEventListener('click', modalClose)

$(function () {
  $('.rotating-slider').rotatingSlider({
    slides: '.slide',
    circularRotation: true,
    autoRotate: true,
    autoRotateSpeed: 3000,
    draggable: true,
    responsive: true,
    slideHeight: 360,
    slideWidth: 480,
  });
});