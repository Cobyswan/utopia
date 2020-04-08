import React from "react";
import ProductList from "../../Components/ProductList/ProductList";
import './Home.css'

export default function Home() {
  return (
    <div className='homeWrapper'>
      <ProductList></ProductList>
    </div>
  );
}
