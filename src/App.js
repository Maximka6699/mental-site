import'./css/reset.css'
import './css/style.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FirstPage from './pages/FirstPage';
import ShopCard from './components/shopCard/Shopcard';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Shop/>
      {/* <FirstPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
