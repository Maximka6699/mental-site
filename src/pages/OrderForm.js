import React, { useState } from 'react';
import { validatePromoCode, saveOrderToAlgolia } from '../helpers/AlgoliaService';
import { saveOrderToLocalFile } from '../helpers/saveOrder';
import ShopCard from '../components/shopCard/Shopcard';

const OrderForm = ({ products, favorites, toggleFavorite, shopingCart, toggleShopingCart }) => {
  const shopCartProducts = products.filter((product) => shopingCart.includes(product.objectID));

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const orderData1 = {
      email: email,
      phone: phone,
      address: address,
      promoCode: promoCode,
    };

    const isPromoValid = await validatePromoCode(promoCode);
    const shopCount = shopCartProducts.length;
    if (isPromoValid) {
      const orderData = { email, phone, address, promoCode, shopCount };
      await saveOrderToAlgolia(orderData1);
      setMessage('Заказ успешно оформлен!');
      try {
        const response = await fetch('http://localhost:3001/save-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          const result = await response.json();
          setMessage(
            `Заказ успешно оформлен. Номер заказа: ${result.orderId}. Кол-во товаров: ${shopCount}.`,
          );
        } else {
          setMessage('Ошибка при сохранении заказа.');
        }
      } catch (error) {
        setMessage('Ошибка при сохранении заказа: ' + error.message);
      }
    } else {
      setMessage('Промокод недействителен.');
    }
  };
  return (
    <div className="intro">
      <div className="wrapper">
        <div className="wrapper obj-margin-0">
          <h1 className="title">&lt;оформление заказа&gt;</h1>
          <p1 className="subtitle">осталась пара простых шагов!</p1>
        </div>
        <div className="grid-container">
          {/* <!-- Ваши карточки товаров, например: --> */}
          {shopCartProducts.map((product) => {
            return (
              <ShopCard
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

          {/* <!-- ... Добавьте карточки товаров по необходимости ... --> */}
        </div>
        <form className="form-stile" onSubmit={handleFormSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Телефон:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div>
            <label>Адрес доставки:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Промокод:</label>
            <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
          </div>
          <button className="big-btn-f" type="submit">
            Оформить заказ
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default OrderForm;
