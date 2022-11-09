let menus = [
  {
    name: 'Dragon Roll',
    desc: 'Tempura shrimp, cucumber, crab meat, avocado, tobiko and choice of salmon, white tuna ,bbq eel or avocado on top ',
  },
  {
    name: 'Sushi Roll',
    desc: 'Tempura shrimp, cucumber, crab meat, avocado, tobiko and choice of salmon, white tuna ,bbq eel or avocado on top ',
  },
  {
    name: 'Tide Roll',
    desc: 'Tempura shrimp, cucumber, crab meat, avocado, tobiko and choice of salmon, white tuna ,bbq eel or avocado on top ',
  },
];

const createMenu = () => {
  const menu = document.createElement('div');
  const title = document.createElement('h1');
  title.classList.add('card-menu-title');
  title.textContent = 'AFFORDABLE TAKE-OUT SUSHI';
  menu.appendChild(title);
  const cardMenu = document.createElement('div');
  cardMenu.classList.add('card-menu');
  menus.map((menu) => {
    const x = document.createElement('div');
    x.classList.add('card');
    x.innerHTML = `<img src="../src/assets/image_processing20220701-24597-1ka7b6g.jpg" alt=""/>
                        <h3 class="item-name">${menu.name}</h3>
                        <p class="item-ingredients">
                        ${menu.desc}
                        </p>`;
    cardMenu.appendChild(x);
  });
  menu.appendChild(cardMenu);
  return menu;
};

const Menu = () => {
  document.querySelector('section').innerHTML = '';
  const content = document.querySelector('section');
  content.appendChild(createMenu());
};

export default Menu;
