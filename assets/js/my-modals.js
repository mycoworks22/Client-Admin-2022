function openMyModal(param) {
  // get the modal and the modal container
  const modalContainer = document.getElementById(param);
  const modalInner = modalContainer.querySelector('.my-modal');

  // change the display property of the modal container
  modalContainer.classList.remove('d-none');
  modalContainer.classList.add('d-flex');

  // show the modal
  setTimeout( function () {
    modalInner.style.transform = 'translateY(0)';
  }, 100);
}

function closeMyModal(param) {
  // get the modal and the modal container
  const modalContainer = document.getElementById(param);
  const modalInner = modalContainer.querySelector('.my-modal');


  // hide modal
  modalInner.style.transform = 'translateY(-100vh)';

  setTimeout( function () {
    // hide modal container
    modalContainer.classList.remove('d-flex');
    modalContainer.classList.add('d-none');
  }, 500);
}