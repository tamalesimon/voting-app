import React from 'react';
//import logo from './logo.svg';
import ProductList from './components/product-list.component';
import './App.css';

function App() {
  return (
    <div class="main ui text container">
      <h1 class="ui dividing centered header">Popular Products</h1>
      <ProductList/>
    </div>
  );
}

export default App;
