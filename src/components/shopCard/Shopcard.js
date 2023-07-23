import React, { useState } from 'react';
import './styles.css'; // Подключите стили для карточки

const ShopCard = ({ title, collection, style, available, coast }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="collection">{collection}</div>
      <div className="product-info">
        <div className="titleCard">{title} | {style} style </div>
        <div className="titleCard">{coast}p. </div>
      </div>
        {available ? (
          <div className={`buttons ${isHovered ? 'hovered' : ''}`}>
            <button className="add-to-cart"><span>+ в корзину</span></button>
            <button className="add-to-favorites"> &lt;3
              {/* <span role="img" aria-label="favorites">
                ❤️
              </span> */}
            </button>
          </div>
        ) : (
          <div className={`not-available ${isHovered ? 'hovered' : ''}`}>
            <div className="not-available-btn">+ в лист ожидания</div>
          </div>
        )}
    </div>
  );
};

export default ShopCard;
