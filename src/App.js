import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Shops from './pages/Shops';
import ShopCategory from './pages/ShopsCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';


function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Shops />} />
      <Route path='/men' element = {<ShopCategory banner={men_banner} category="men"/>} />
      <Route path='/women' element = {<ShopCategory banner={women_banner} category="women"/>} />
      <Route path='/kid' element = {<ShopCategory banner={kid_banner} category="kid"/>} />
      <Route path='/product/:productId' element = {<Product/>} />
      <Route path='/product' element = {<Product/>} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/login' element = {<Login />} />
    </Routes>
    <Footer />
   </Router>
   </>
  );
}

export default App;
