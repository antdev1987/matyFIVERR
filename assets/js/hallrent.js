const root = document.getElementById('rentHall');
const txt = document.getElementsByClassName('modal-text')[0];
const list = document.getElementsByClassName('list')[0];

const information = [
  { title: 'THETUNEL' },
  { title: 'THELIGHTROOM' },
  { title: 'THEWINDOWHALL' },
  { title: 'THEDABCEROOM' },
];

function listing(val) {
  console.log(val);
  val.map((item) => {
    let li = document.createElement('li');
    li.innerHTML = `<li class="rent__box--${item} pXY-3">${information[item].title}</li>`;

    list.appendChild(li);
    console.log(item);
  });
}

function createli(val) {
  let li = document.createElement('li');
  li.innerHTML = `<li class="rent__box--${val} pXY-3">${information[val].title}</li>`;

  list.appendChild(li);
}

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}

listing(allStorage());

const inner = ({ title, idx }) => {
  txt.innerHTML = `
  <h2>${title}</h2>
  <ul></ul>
  <form>
  <button type="submit" class="add">Book</button>
  </form>
  `;
  document.querySelector('.add').onclick = () => {
    localStorage.setItem(idx, idx);
    const aray = allStorage();
    createli(idx);

  };
};

information.map((item, idx) => {
  let div = document.createElement('div');
  div.setAttribute('class', `rent__box--${idx} box pXY-2`);
  div.innerHTML = `
  <h3 class="content__text heading3">${item.title}</h3>
  <div class="content__more"> 
    <button class="color-W heading3 myBtn${idx}" href="#" id="myBtn">take a look ></button>
  </div>`;

  root.appendChild(div);
  document
    .querySelector(`.myBtn${idx}`)
    .addEventListener('click', () => inner({ idx, ...item }));
});
