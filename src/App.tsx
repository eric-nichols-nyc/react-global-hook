import React from 'react';
import Products from './components/Products'
import NavBar from './components/NavBar'
import configureProdStore from './hooks-store/products-store';
import configureCartStore from './hooks-store/cart-store';

import './App.css';
configureProdStore()
configureCartStore()

function App() {
  return (
    <div className="App">
        <NavBar />
      <Products />
    </div>
  );
}

export default App;
