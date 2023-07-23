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
import React from 'react';

function App() {

  const [clothes, setClothes] = React.useState([])

    React.useEffect(()=>{
      fetch('https://64bd46e92320b36433c78fb7.mockapi.io/clothes')
      .then((res)=> { return res.json(); })
      .then((arr)=>{ setClothes(arr); });
    }, []);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Routes>

          <Route path='/' element={<FirstPage item={clothes}/>}/>
          <Route path='/shop' element={<Shop item={clothes}/>}/>
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
// export {clothes};
