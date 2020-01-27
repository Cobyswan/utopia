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
      console.log(res.data);
      this.setState({ products: res.data });
    });
  }

  render() {
    console.log(this.state.products);
    let productMap = this.state.products.map(product => {
      return (
        <Link to={`/product/${product._id}`}><Product
          title={product.name}
          price={product.price}
          image={product.image}
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
