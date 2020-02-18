import React from 'react';
import './app.css';
import Cart from './components/Cart/cart.js';
import Item from './components/Item/item.js';


function App() {

  return (
    <div className="container">
      <header>
        <nav className="navBar">
          <img id="nav-title-img" src="/img/cart.svg" alt="no img"></img>
          <h1 id="nav-title">Shopping Cart</h1>
          <div className="nav-links-container">
            <button className="nav-links">Cart 0</button>
            <Cart />
          </div>
        </nav>
        <img id="banner" src="/img/banner.jpg"alt="no img"></img>
      </header>
      <div className="item-container">
        <Item />
      </div>
    </div>
  );
}

export default App;
