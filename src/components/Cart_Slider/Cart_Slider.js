import '../Cart_Slider/cartstypes.css';
import ShopCard from '../shopCard/Shopcard';
import BuyCard from '../shopCard/buy';
//import Cart_item from '../cart-item/Cart-item';
import CSSTransition from 'react-transition-group/CSSTransition';
import React from 'react';
import { cartContext } from '../../App';
import { NavLink } from 'react-router-dom';

const Cart_Slider = () => {
  const {
    clothes,
    favorites,
    toggleFavorite,
    shopingCart,
    toggleShopingCart,
    isModalOpen,
    openModal,
    closeModal,
  } = React.useContext(cartContext);
  const shopCartProducts = clothes.filter((product) => shopingCart.includes(product.objectID));
  // console.log();
  const [showContent, setShowContent] = React.useState(false);

  const [animationReady, setAnimationReady] = React.useState(false);

  React.useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setShowContent(true);
        setAnimationReady(true);
      }, 0.1);
    } else {
      setAnimationReady(false);
    }
  }, [isModalOpen]);

  const handleButtonClick = () => {
    // Выполняем оба действия
    setShowContent(!showContent);
    setTimeout(closeModal, 50);
  };
  // const getTotalPrice = () => {
  //   return shopCartProducts.reduce((total, product) => total + shopCartProducts[product].coast, 0);
  // };

  let totalCoast = 0;

  for (let i = 0; i < shopCartProducts.length; i++) {
    // Преобразуем значение coast из строки в число и добавляем к общей сумме
    totalCoast += parseFloat(shopCartProducts[i].coast) || 0;
  }

  return (
    <>
      {isModalOpen && (
        <div
          onClick={handleButtonClick}
          className={`${isModalOpen ? 'cart-template' : 'cart-template.close'}`}>
          {/* <!--чб бэк --> */}
          {/* {console.log(isModalOpen, showContent)} */}
          {isModalOpen && (() => setShowContent(!showContent))}
          <CSSTransition in={showContent} timeout={300} classNames="fade_side" unmountOnExit>
            <div onClick={(e) => e.stopPropagation()} className="cart-base-rect">
              {/* <!--белая подложка --> */}
              <div className="cart-wrapper">
                {/* <!--обертка вертикальная --> */}
                <h1 className="big-txt">корзина</h1>
                <div className="items-list">
                  {shopCartProducts.map((product) => {
                    return (
                      <BuyCard
                        key={product.objectID}
                        product={product}
                        isFavorite={favorites.includes(product.objectID)}
                        onToggleFavorite={() => toggleFavorite(product.objectID)}
                        isInShopingCart={shopingCart.includes(product.objectID)}
                        onToggleShopingCart={() => toggleShopingCart(product.objectID)}
                        {...product}
                      />
                    );
                  })}
                </div>

                <div className="w">
                  <div className="g">
                    <div className="alin">Всего:</div>
                    <div className="alin">{totalCoast} p.</div>
                  </div>

                  <>
                    <NavLink to="/order" className="big-btn" onClick={handleButtonClick}>
                      &lt;оформить заказ&gt;
                    </NavLink>
                  </>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      )}
    </>
  );
};

export default Cart_Slider;
