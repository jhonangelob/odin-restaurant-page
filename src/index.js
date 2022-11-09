import Load from './modules/Load';
import Home from './modules/Home';
import Menu from './modules/Menu';
import Contact from './modules/Contact';

const createLinkEvent = () => {
  document.getElementById('home').addEventListener('click', Home);
  document.getElementById('menu').addEventListener('click', Menu);
  document.getElementById('contact').addEventListener('click', Contact);
};

init();

function init() {
  Load();
  Home();
  createLinkEvent();
}
