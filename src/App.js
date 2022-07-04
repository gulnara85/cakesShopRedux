import React from 'react';
import './App.css';
import { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/cart/Cart';
import Menu from "./components/Menu";
import About from './components/About';
import { HashLink } from 'react-router-hash-link';

import {useState} from 'react';
import { useSelector } from "react-redux";
import { getTotalQuantity } from "./components/redux/CartSlice";
import image from './cart.png'
import ContactUs from './ContactUs';


function App() {

  const totalQuantity = useSelector (getTotalQuantity);

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  }

  return (
<div>
<div className='container order'>
      <p>Please allow at least 3 days for preparing your order</p>
      </div>

      <div >

    <Router>
    <nav>
      
      <Link to='/' className='link'>About</Link>
      <Link to='/cakes' className='link'>Menu</Link>
      <Link to='/contactUs' className='link'>Contact Us</Link>
      <Link to='/cart' className='link'> <p className='totalItems'> {totalQuantity}</p><img onClick={handleClick} className="cartIcon" src={image}/> </Link>
    </nav>

    
    <Routes>
      <Route path = '/' element = {<About/>}/>
      <Route path = '/cakes' element = {<Menu/>}/>
      <Route path = '/cart' element = {<Cart/>}/>
      <Route path = '/contactUs' element = {<ContactUs/>}/>
    </Routes>
  </Router>
  </div>
    
    
    <header>
    <div className='container'>
<p className='contact-us'>
  496 Gilbert Ave York, ON M6E 4X5<br/>
  info@plantcakes.ca <br/>Mon-Fri | 8am to 4pm EST <br/>
  647-546-1286
</p>
</div>
</header>

    </div>
  );
}

export default App;
