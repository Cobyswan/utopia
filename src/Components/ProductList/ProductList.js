import React, { Component } from 'react';
import Product from '../Product/Product';
import testProduct from "../../TestData/testProduct";
import axios from 'axios';
import './productList.css'

export class ProductList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: testProduct.default,
        };
      }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/api/products`).then(res => {
          console.log(res.data);
          this.setState({ products: res.data });
        });
      }


    render() {
        console.log(this.state.products)
        let productMap = this.state.products.map(product => {
            return <Product  title={product.name} price={product.price} image={product.image}/>
        })

        return (
            <div className='productListContainer'>
                {productMap}
            </div>
        );
    }
}

export default ProductList;
