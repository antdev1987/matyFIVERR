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
    createli(item)
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


// Creating content of the pop-up
const inner = ({ title, idx }) => {
  txt.innerHTML = `
  <h2>${title}</h2>
  <div class="rent__box--${idx} box pXY-2"></div>
  <ul>
    <li>
      <p>Capacity:</p>
      <p>250</p>
    </li>
    <li>
    <p>Available materials:</p>
      </p>
      <p>- chairs</p>
      <p>- tables</p>
      <p>- beamer</p>
      <p>- projectionscreen</p>
      <p>- sound</p>
      <p>- lightsystem</p>
    </li>
  </ul>
  <form>
  <button class="btn btn--primary mY-2 add" type="submit">Book</button>
  </form>
  `;
  document.querySelector('.add').onclick = () => {
    localStorage.setItem(1, idx);
    const aray = allStorage();
    createli(idx);
  };
};

// Creating rent hall boxes
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

// Style
const buttonlist = document.getElementsByClassName('button')[0];
const lists = document.getElementsByClassName('list')[0];

buttonlist.addEventListener(
  'mouseover',
  () => (lists.style.maxHeight = '15rem')
);

buttonlist.addEventListener('mouseout', () => (lists.style.maxHeight = '0'));
