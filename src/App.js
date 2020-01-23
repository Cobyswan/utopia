import React from 'react';
import './App.css';
import Product from './Components/Product/Product';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import Routes from './routes';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes></Routes>
    </div>
  );
}

export default App;
