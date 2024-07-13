import '../Cart_Slider/cartstypes.css';
import ShopCard from '../shopCard/Shopcard';
//import Cart_item from '../cart-item/Cart-item';
import CSSTransition from 'react-transition-group/CSSTransition';
import React from 'react';
import { cartContext } from '../../App';

const Cart_Slider = () => {
  const { isModalOpen, closeModal } = React.useContext(cartContext);
  const [showContent, setShowContent] = React.useState(false);

  const [animationReady, setAnimationReady] = React.useState(false);

  React.useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setShowContent(true);
        setAnimationReady(true);
      }, 0.001);
    } else {
      setAnimationReady(false);
    }
  }, [isModalOpen]);

  React.useEffect(() => {
    if (isModalOpen) {
      setShowContent(!showContent);
    }
  }, [isModalOpen]);
  const handleButtonClick = () => {
    // Выполняем оба действия
    setShowContent(!showContent);
    setTimeout(closeModal, 50);
  };

  return (
    <>
      {/* {isModalOpen && ( */}
      <div
        onClick={handleButtonClick}
        className={`${isModalOpen ? 'cart-template' : 'cart-template.close'}`}>
        {/* <!--чб бэк --> */}
        {/* {console.log(isModalOpen, showContent)} */}
        {/* {setTimeout(() => setShowContent(!showContent), 1000)} */}
        {/* {isModalOpen && (() => setShowContent(!showContent))} */}
        <CSSTransition in={showContent} timeout={300} classNames="fade_side" unmountOnExit>
          <div onClick={(e) => e.stopPropagation()} className="cart-base-rect">
            {/* <!--белая подложка --> */}
            <div className="cart-wrapper">
              {/* <!--обертка вертикальная --> */}
              <h1 className="big-txt">корзина</h1>
              <div className="items-list">
                <ShopCard />
                <ShopCard />
                <ShopCard />
              </div>

              <div className="w">
                <div className="g">
                  <div className="alin">Всего:</div>
                  <div className="alin">8000p.</div>
                </div>
                <button className="big-btn">&lt;оформить заказ&gt;</button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
      {/* )} */}
    </>
  );
};

export default Cart_Slider;
