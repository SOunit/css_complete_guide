console.log('hello from js!');

// get access
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// js property notations
console.log(backdrop.style.backgroundImage);
console.log(backdrop.style['background-image']);

// add event listener
console.log(selectPlanButtons);
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    // style prop holds only inline prop of element
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    // this overwrite complete class list
    // modal.className = 'open';

    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

const closeModal = () => {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';

  backdrop.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
};

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
