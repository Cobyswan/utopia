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
          <img  className="productImage" src={this.props.image} alt='nah'/>
        </div>
        <div className="productInfoContainer">
          {this.state.isShown ? (
            <div>
              <p style={{color:'white'}} className='pListPrice'>${this.props.price}</p>
            </div>
          ) : (
            <div>
            <h3 className='pListTitle' style={{color:'white'}}>{this.props.name}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
