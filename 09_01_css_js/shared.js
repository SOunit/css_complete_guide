console.log('hello from js!');

// get access
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

// add event listener
const selectPlanButtons = document.querySelectorAll('.plan button');
console.log(selectPlanButtons);
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    // style prop holds only inline prop of element
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
}
