import React, { useState } from 'react';
import './styles.css'; // Подключите стили для карточки
const placeholderImg =
  'https://static.vecteezy.com/system/resources/previews/015/434/998/original/pixel-cat-in-christmas-sweater-new-year-cute-cartoon-cat-in-knitted-sweater-pixel-art-8-bit-cartoon-character-vector.jpg';
const ShopCard = ({
  title,
  collection,
  style,
  available,
  coast,
  img,
  isFavorite,
  onToggleFavorite,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="product-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={img || placeholderImg} className="product-image" />
      <div className="collection">{collection}</div>
      <div className="product-info">
        <div className="titleCard">
          {title} | {style} style{' '}
        </div>
        <div className="titleCard">{coast}p. </div>
      </div>
      {available ? (
        <div className={`buttons ${isHovered ? 'hovered' : ''}`}>
          <button className="add-to-cart">
            <span>+ в корзину</span>
          </button>
          <button
            className={`add-to-favorites ${isFavorite ? 'add-to-favorites1' : 'add-to-favorites'}`}
            onClick={onToggleFavorite}>
            {' '}
            {/* &lt;3 */}
            <span role="img" aria-label="favorites">
              ❤️
            </span>
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
