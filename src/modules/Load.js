const createNavs = () => {
  const navs = document.createElement('nav');
  navs.innerHTML = `<ul>
                        <li>
                            <a id="home" >Home</a>
                        </li>
                        <li>
                            <a id="menu" >Menu</a>
                        </li>
                        <li>
                            <a id="contact">Contact</a>
                        </li>
                    </ul>`;
  return navs;
};

const createMain = () => {
  const main = document.createElement('section');
  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `<span><a href="https://github.com/jhonangeloB">jhonangelob</a></span>`;
  return footer;
};

const Load = () => {
  const content = document.getElementById('content');
  content.appendChild(createNavs());
  content.appendChild(createMain());
  content.appendChild(createFooter());
};
export default Load;
