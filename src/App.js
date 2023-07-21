import'./css/reset.css'
import './css/style.css';
import LogoWhoIsMD from "./img/svg/logo whois 1.svg";
import burger from "./img/svg/burger menu.svg";

function App() {
  return (
    <div className="App">
          <header className="header">
            <div className="wrapper">

              <div className="header_wrapper">
                    <div className="header_logo">
                        <a href="/" className="header_logo-link">
                            <img src={LogoWhoIsMD} alt="who is" className="header_logo pic"/>
                        </a>
                    </div>
                    <nav className="header_nav">
                        <ul className="header_list">
                            <li className="header_item">
                                <a href="#!" className="header_link">каталог</a>
                            </li>
                            <li className="header_item">
                                <a href="#!" className="header_link">для покупателя</a>
                            </li>
                            <li className="header_item">
                                <a href="#!" className="header_link">корзина</a>
                            </li>
                            <li className="header_item">
                                <a href="#!" className="header_link">новый дроп</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header_burger">
                        <a href="/" className="header_burger-link">
                            <img src={burger} alt="who is" className="header-burger pic"/>
                        </a>
                    </div>
              </div>

            </div>
          </header>

    <main className="main">
        <section className="intro">
            {/* <!-- заголовок и подзаголовок --> */}
            <div className="wrapper">
                <h1 className="title">
                    &lt;whoiswear&gt;
                </h1>
                <p1 className="subtitle">
                    одежда, как смысл жизни
                </p1>
                
            </div>
            {/* <!-- заголовок и подзаголовок --> */}

            {/* <!-- 4 карточки товара в ряд начало --> */}
            <div className="wrapper_grid4">
                <div className="rectangle">
                    <p className="top-text">collection</p>
                    <p className="bottom-text">&lt;name &amp; style&gt;</p>
                </div>
                <div className="rectangle">
                    <p className="top-text">collection</p>
                    <p className="bottom-text">&lt;name &amp; style&gt;</p>
                </div>
                <div className="rectangle">
                    <p className="top-text">collection</p>
                    <p className="bottom-text">&lt;name &amp; style&gt;</p>
                </div>
                <div className="rectangle">
                    <p className="top-text">collection</p>
                    <p className="bottom-text">&lt;name &amp; style&gt;</p>
                </div>
            </div>
             {/* <!-- 4 карточки товара в ряд конец --> */}

              {/* <!-- большой блок и два маленьких для товаров  начало--> */}
            <div className="wrapper">
                <div className="big_rect">
                    <h1 className="block_name">&lt;mental health&gt;</h1>
                    <div className="link_group">
                        <p className="description">новая коллекция прямо из самых темных мест твоего сознания</p>
                        <a href="#!" className="smooth-underline">перейти в раздел</a>
                    </div>
                </div>
                <div className="wrapper_grid2">
                    <div className="mid_rect">
                        <h1 className="block_name">&lt;mental health&gt;</h1>
                        <div className="link_group">
                            <p className="description">новая коллекция прямо из самых темных мест твоего сознания</p>
                            <a href="#!" className="smooth-underline">перейти в раздел</a>
                        </div>
                    </div>
                    <div className="mid_rect">
                        <h1 className="block_name">&lt;mental health&gt;</h1>
                        <div className="link_group">
                            <p className="description">новая коллекция прямо из самых темных мест твоего сознания</p>
                            <a href="#!" className="smooth-underline">перейти в раздел</a>
                        </div>
                    </div>
                </div>
                <a href="#!" className="smooth-underline">смотреть все разделы</a>    
            </div>
              {/* <!-- большой блок и два маленьких для товаров  конец--> */}

        </section>

        <section className="for_user">
            <div className="wrapper">
                <h1 className="title2">
                    &lt;для покупателя&gt;
                </h1>
                <div className="wrapper_grid2v">
                    <div className="big_rect">
                        <h1 className="block_name">&lt;mental health&gt;</h1>
                        <div className="link_cont_center">
                            <a href="#!" className="smooth-underline">перейти в раздел</a>
                        </div>
                    </div>
                    <div className="big_rect">
                        <h1 className="block_name">&lt;mental health&gt;</h1>
                        <div className="link_cont_center">
                            <a href="#!" className="smooth-underline">перейти в раздел</a>
                        </div>
                    </div>
                </div>
                <a href="#!" className="smooth-underline">смотреть все разделы</a>
            </div>
            
        </section>
        {/* <!-- <div className="footer">
            <img src="/svg/Vector.png" alt="logo" className="footer_img">
        </div> --> */}
        <footer className="footer">
            <div className="column">
                <svg width="260" height="149" viewBox="0 0 260 149" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M259.961 3.11838L233.419 146.422C233.185 147.677 232.094 148.584 230.825 148.584H173.235C171.902 148.584 170.775 147.584 170.612 146.259L169.365 135.961C169.344 135.756 169.294 135.557 169.223 135.366L167.359 130.306C167.055 129.477 166.353 128.853 165.488 128.647L162.49 127.939C161.562 127.719 160.825 127.01 160.563 126.096L159.769 123.318C159.464 122.248 158.522 121.482 157.409 121.411L152.512 121.071L154.404 119.207L151.108 117.882C150.23 117.527 149.606 116.727 149.478 115.784L147.855 103.814C147.791 103.339 147.855 102.85 148.047 102.41L148.812 100.653C149.053 100.1 149.478 99.6464 150.01 99.3629L151.335 98.6684C152.66 97.9738 153.149 96.3154 152.405 95.0185C151.739 93.8562 152.051 92.382 153.128 91.5811L157.855 88.0871L154.397 85.4578L154.333 82.7646L158.918 78.6611C160.244 77.4776 160.045 75.3514 158.522 74.4301L157.295 73.693C156.417 73.1614 155.928 72.1692 156.034 71.1487L156.629 65.5923C156.785 64.1252 155.708 62.807 154.234 62.6794L149.039 62.2188L150.931 57.6617L148.004 57.527L145.446 55.3654L140.995 53.6716L137.735 52.4384L135.162 56.3718C134.418 57.5128 132.915 57.9026 131.711 57.2577L127.735 55.1457C126.445 54.4583 124.843 54.9544 124.163 56.2442L121.54 61.2124L118.316 60.7446L115.41 60.3123C113.865 60.0855 112.462 61.2266 112.384 62.7857L112.044 69.3485C111.98 70.5321 111.136 71.5314 109.981 71.7865L103.893 73.1473L106.204 76.3153C106.388 76.5704 106.53 76.861 106.615 77.1657L107.898 81.7795C108.103 82.5095 107.983 83.2891 107.571 83.9199L102.745 91.3827C102.043 92.4671 102.228 93.8987 103.184 94.7633L109.421 100.461C109.57 100.596 109.705 100.752 109.818 100.915L111.76 103.743C112.129 104.281 112.292 104.948 112.199 105.6L109.974 121.78C109.747 123.403 108.117 124.438 106.551 123.934L105.729 123.672C104.12 123.155 102.447 124.26 102.292 125.94L102.121 127.783C101.994 129.115 100.902 130.143 99.5629 130.178L92.1284 130.384L95.9484 134.537L93.7231 134.601L90.796 136.245C89.5841 136.925 89.1093 138.435 89.7117 139.689L90.5196 141.369C90.6826 141.702 90.7677 142.063 90.7818 142.432L90.8811 145.834C90.9236 147.322 89.7329 148.555 88.2446 148.555H29.1868C27.9111 148.555 26.8196 147.648 26.5928 146.394L0.0440896 3.11838C-0.253574 1.49541 0.993778 0 2.6451 0H33.7013C34.977 0 36.0685 0.907165 36.2953 2.1616L61.221 136.656C61.4549 137.91 62.5463 138.818 63.815 138.818H69.3784C70.7037 138.818 71.8164 137.839 71.9936 136.528L106.771 2.28917C106.948 0.978037 108.068 0 109.386 0H150.591C151.909 0 153.029 0.978037 153.206 2.28209L188.295 136.528C188.472 137.839 189.592 138.81 190.91 138.81H196.19C197.459 138.81 198.55 137.903 198.784 136.656L224.036 2.15452C224.27 0.907165 225.361 0 226.63 0H257.36C259.011 0 260.259 1.49541 259.954 3.11838H259.961Z"/>
                </svg>
            </div>
            <div className="column">
              {/* <!-- Группы из средства связи --> */}
              {/* <!-- <h3 className="footer-text-b">Связь</h3> --> */}
              <ul>
                  <li className="footer-text-b"> whoisthis.brand@ya.ru
                      <ul>
                          <li className="footer-text-d">Почта</li>
                      </ul>
                  </li>
                  <li className="footer-text-b"> &#x40;whoisthis
                      <ul>
                          <li className="footer-text-d">Телеграм</li>
                      </ul>
                  </li>
                  <li className="footer-text-b"> &#x40;whoisthis
                      <ul>
                          <li className="footer-text-d">Инст</li>
                      </ul>
                  </li>
              </ul>
            </div>
            <div className="column">
              {/* <!-- Каталог --> */}
              <ul>
                  <li className="footer-text-b"> <a href="#!" className="smooth-underlinew">каталог</a>
                      <ul>
                          <li className="footer-text-d">Футболки</li>
                          <li className="footer-text-d">Джинсы</li>
                          <li className="footer-text-d">Аксессуары</li>
                          <li className="footer-text-d">Lookbook</li>
                      </ul>
                  </li>
              </ul>
            </div>
            <div className="column">
              {/* <!-- Для покупателя --> */}
              <ul>
                  <li className="footer-text-b"> <a href="#!" className="smooth-underlinew">для покупателя</a>
                      <ul>
                          <li className="footer-text-d">О бренде</li>
                          <li className="footer-text-d">Доставка и оплата</li>
                      </ul>
                  </li>
              </ul>
            </div>
        </footer>

    </main>

    </div>
  );
}

export default App;
