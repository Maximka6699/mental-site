import React, { useState, useEffect } from 'react';
import '../popup/popup.css'; // Подключите стили для Popup

const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleLinkClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  // Закрывать попап, когда кликаем за его пределами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isPopupVisible && event.target.classList.contains('popup-container')) {
        handleClosePopup();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <>
      <a href="#" onClick={handleLinkClick} className='header_link'>
        Открыть попап
      </a>

      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Заголовок попапа</h2>
            <button className="close-btn" onClick={handleClosePopup}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
