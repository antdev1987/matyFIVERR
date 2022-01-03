const root = document.getElementById('rentHall');
const txt = document.getElementsByClassName('modal-text')[0];
const t = true;

let i = 1;

const information = [
  { title: 'THETUNEL' },
  { title: 'THELIGHTROOM' },
  { title: 'THEWINDOWHALL' },
  { title: 'THEDABCEROOM' },
];

const inner = (r) => {
  txt.innerHTML = `${r}`;
};

for (const item of information) {
  let div = document.createElement('div');
  div.setAttribute('class', `rent__box--${i} box pXY-2`);
  div.innerHTML = `
  <h3 class="content__text heading3">${item.title}</h3>
  <div class="content__more">
    <button class="color-W heading3 myBtn${i}" href="#" id="myBtn">take a look ></button>
  </div>`;

  root.appendChild(div);
  document
    .querySelector(`.myBtn${i}`)
    .addEventListener('click', () => inner(item.title));
  i++;
}
