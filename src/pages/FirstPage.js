import { cards, firstcards } from "../helpers/shopCardsList";
import ShopCard from "../components/shopCard/Shopcard";
import React from "react";

const FirstPage = ({item}) => {
    
    return ( 
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
                    {item.slice(0,4).map((shopcard)=>{
                        return (<ShopCard key={shopcard.id} {... shopcard} />)
                    })}
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
                          <h1 className="block_name">&lt;о бренде&gt;</h1>
                          <div className="link_cont_center">
                              <a href="/about" className="smooth-underline">перейти в раздел</a>
                          </div>
                      </div>
                      <div className="big_rect">
                          <h1 className="block_name">&lt;доставка&gt;</h1>
                          <div className="link_cont_center">
                              <a href="/delivery" className="smooth-underline">перейти в раздел</a>
                          </div>
                      </div>
                  </div>
                  <a href="#!" className="smooth-underline">смотреть все разделы</a>
              </div>
              
          </section>
          {/* <!-- <div className="footer">
              <img src="/svg/Vector.png" alt="logo" className="footer_img">
          </div> --> */}
        
        

      </main>
     );
}
 
export default FirstPage;