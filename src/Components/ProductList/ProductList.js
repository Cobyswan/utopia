import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import "./productList.css";
import { Link } from "react-router-dom";

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/products`).then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    let productMap = this.state.products.map((product, i) => {
      return (
        <Link style={{height: '25em', border: 'solid red 1px'}} key={i} to={`/product/${product._id}`}><Product price={product.price} image={product.image} name={product.name}
        /></Link>
      );
    });

    return (
      <div className="productListWrapper">
        <div className="productListContainer">{productMap}</div>
      </div>
    );
  }
}

export default ProductList;
