const createHome = () => {
  const home = document.createElement('div');
  home.innerHTML = `<div class="hero-img">
                        <img src="../src/assets/77003921.svg" alt="" />
                    </div>
                    <div class="hero-headline">
                        <h1>SUSHIMAN</h1>
                        <h3>
                        We wish to assure you, that Sushi Place will offer the best sushi
                        dishes made from the highest quality products. Our aim is to serve
                        fresh and delicious food to our customers. Our menu will consist of
                        sushi dishes, desserts, hot and cold beverages and soft drinks. We
                        plan to hire an experienced sushi chef, which will definitely be a
                        strong advantage of our restaurant business. We are aware of the
                        fact that sushi industry has become a highly competitive field over
                        the past few years, that is why we want our business to stand out
                        from the rest. We strongly believe, that Sushi Place and its finest
                        sushi dishes will attract customers and make them want to come back
                        for more.
                        </h3>
                    </div>`;
  return home;
};

const Home = () => {
  document.querySelector('section').innerHTML = '';
  const content = document.querySelector('section');
  content.innerHTML = '';
  content.appendChild(createHome());
};

export default Home;
