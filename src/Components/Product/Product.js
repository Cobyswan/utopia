import React, { Component } from "react";
import axios from "axios";
import testProduct from "../../TestData/testProduct";
import "./product.css";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false
    };
  }


  render() {
    return (
      <div
        onMouseEnter={() => this.setState({ isShown: true })}
        onMouseLeave={() => this.setState({ isShown: false })}
        className="productContainer"
      >
        <div className="imageContainer">
          <img style={{width: 300}} className="productImage" src={this.props.image} />
        </div>
        <div className="productInfoContainer">
          {this.state.isShown ? (
            <div>
              <h1>{this.props.title}</h1>
              <p>${this.props.price}</p>
            </div>
          ) : (
            <div>
            <h1>{this.props.title}</h1>
            <p style={{color: 'white'}}>placeholder</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
