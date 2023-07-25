import './css/reset.css';
import './css/style.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FirstPage from './pages/FirstPage';
import Shop from './pages/Shop';
import About from './pages/About';
import Collections from './pages/Collections';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrolToTop';
import Delivery from './pages/Delivery';
import Favorites from './pages/Favorites';
import React from 'react';
import axios from 'axios';
import algoliasearch from 'algoliasearch';

function App() {
  const [clothes, setClothes] = React.useState([]);

  //  "my_app_id" и "my_search_only_api_key"
  const client = algoliasearch('AQCFIGANQA', '18c24a2c19cc75a5fd9d4e3a4615439d');

  //  мой индекс algolia - health
  const index = client.initIndex('health');

  const [filterType, setFilterType] = React.useState(0);
  const [filterAvi, setFilterAvi] = React.useState(0);
  const [filterSize, setFilterSize] = React.useState(0);
  const [filterCol, setFilterCol] = React.useState(0);

  const typeNames = ['Все', 'Футболки', 'Штаны', 'Шорты', 'Свитеры', 'Украшения'];
  const aviNames = ['Все', 'В наличии', 'Предзаказ'];
  const sizeNames = ['Все', 'L', 'M', 'XL'];
  const collectionNames = ['Все', 'mental health', 'autumn breath', 'hot winter'];

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

  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<FirstPage />} />
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
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
