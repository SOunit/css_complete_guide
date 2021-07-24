console.log('hello from js!');

// get access
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');

// add event listener
console.log(selectPlanButtons);
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    // style prop holds only inline prop of element
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
}

const closeModal = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
};

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);
