import './css/reset.css';
import './css/style.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FirstPage from './pages/FirstPage';
import Shop from './pages/Shop';
import About from './pages/About';
import Collections from './pages/Collections';
import OrderForm from './pages/OrderForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrolToTop';
import Delivery from './pages/Delivery';
import Favorites from './pages/Favorites';
import React, { useState } from 'react';
import algoliasearch from 'algoliasearch';
import Cart_Slider from './components/Cart_Slider/Cart_Slider';
import index from './helpers/algoliaSearsh';

export const cartContext = React.createContext();

function App() {
  const [clothes, setClothes] = React.useState([]);

  const [filterType, setFilterType] = React.useState(0);
  const [filterAvi, setFilterAvi] = React.useState(0);
  const [filterSize, setFilterSize] = React.useState(0);
  const [filterCol, setFilterCol] = React.useState(0);

  const typeNames = ['Все', 'Футболки', 'Штаны', 'Шорты', 'Свитеры', 'Украшения'];
  const aviNames = ['Все', 'В наличии', 'Предзаказ'];
  const sizeNames = ['Все', 'L', 'M', 'XL'];
  const collectionNames = ['Все', 'mental health', 'autumn breath', 'hot winter'];

  // USEEFFECT ДЛЯ ФИЛЬТРАЦИИ НАЧАЛО

  React.useEffect(() => {
    async function searchWithFacets() {
      try {
        // Создаем фильтры на основе выбранных параметров
        const filters = [];
        filters.push(collectionNames[filterCol]);
        filters.push(typeNames[filterType]);
        filters.push(aviNames[filterAvi]);
        filters.push(sizeNames[filterSize]);

        // Выполняем поиск с учетом фильтров
        const response = await index.search(
          `${filters[0] === 'Все' ? '' : filters[0]}, ${filters[1] === 'Все' ? '' : filters[1]}, ${
            filters[2] === 'Все' ? '' : filters[2]
          }, ${filters[3] === 'Все' ? '' : filters[3]} `,
        );
        console.log(filters[0]);
        setClothes(response.hits);
      } catch (error) {
        console.error('Error searching with facets:', error);
      }
    }

    searchWithFacets();
    console.log(clothes);
  }, [filterCol, filterType, filterAvi, filterSize]);

  // USEEFFECT ДЛЯ ФИЛЬТРАЦИИ КОНЕЦ

  // Состояние, отвечающее за открытие и закрытие компоненты
  const [isModalOpen, setModalOpen] = React.useState(false);

  // Функция для открытия компоненты
  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
  };

  // Функция для закрытия компоненты
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Разблокируем прокрутку страницы
  };

  // ИЗБРАННОЕ начало
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId],
    );
  };

  const [shopingCart, setShopingCart] = useState([]);
  const toggleShopingCart = (productId) => {
    setShopingCart((prevShopingCart) =>
      prevShopingCart.includes(productId)
        ? prevShopingCart.filter((id) => id !== productId)
        : [...prevShopingCart, productId],
    );
  };

  return (
    <div className="App">
      <Router>
        <cartContext.Provider
          value={{
            clothes,
            favorites,
            toggleFavorite,
            shopingCart,
            toggleShopingCart,
            isModalOpen,
            openModal,
            closeModal,
          }}>
          <Navbar />
          <ScrollToTop />
          <Navbar />
          <Cart_Slider />
        </cartContext.Provider>
        <Routes>
          <Route
            path="/"
            element={
              <FirstPage
                productsi={clothes}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                shopingCart={shopingCart}
                toggleShopingCart={toggleShopingCart}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                type={filterType}
                onClickType={(id) => setFilterType(id)}
                avi={filterAvi}
                onClickAvi={(id) => setFilterAvi(id)}
                size={filterSize}
                onClickSize={(id) => setFilterSize(id)}
                collection={filterCol}
                onClickCol={(id) => setFilterCol(id)}
                item={clothes}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                shopingCart={shopingCart}
                toggleShopingCart={toggleShopingCart}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                products={clothes}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                shopingCart={shopingCart}
                toggleShopingCart={toggleShopingCart}
              />
            }
          />
          <Route
            path="/order"
            element={
              <OrderForm
                products={clothes}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                shopingCart={shopingCart}
                toggleShopingCart={toggleShopingCart}
              />
            }
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
