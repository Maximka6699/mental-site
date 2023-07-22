import'./css/reset.css'
import './css/style.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FirstPage from './pages/FirstPage';
import Shop from './pages/Shop';
import About from './pages/About';
import Collections from './pages/Collections';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './utils/ScrolToTop';
import Delivery from './pages/Delivery';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Routes>

          <Route path='/' element={<FirstPage/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
          <Route path='/favorites' element={<Favorites/>}/>

        </Routes>

        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
