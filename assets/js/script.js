const inputsData = [];
let form = document.getElementById('form');
let inputs = form.querySelectorAll('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  for (const item of inputs) {
    console.log(item.value);
    if (item.value === '') {
      item.classList.add('outline-red');
      alert('Input is blank');
      return;
    } else if (item.value.length <= 2) {
      item.classList.add('outline-red');
      alert('Input needs to have more than 2');
    }
    item.classList.remove('outline-red');
  }
});
