import React, { Component } from "react";
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
          <img style={{width: 250, height: 250}} className="productImage" src={this.props.image} alt='nah'/>
        </div>
        <div className="productInfoContainer">
          {this.state.isShown ? (
            <div>
              <h3>{this.props.title}</h3>
              <p>${this.props.price}</p>
            </div>
          ) : (
            <div>
            <h3>{this.props.title}</h3>
            <p style={{color: 'black'}}>placeholder</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
