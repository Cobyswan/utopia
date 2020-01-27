import React, { Component } from "react";
import axios from "axios";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/product/${this.props.match.params._id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ product: res.data[0] });
      });
  }

  render() {
    let { product } = this.state;
    console.log(this.state.product);
    return (
      <div
        className="productPageContainer"
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "90vh"
        }}
      >
        <div className="productImageCOntainer">
          <img src={product.image} alt='nah'/>
        </div>
        <div
          className="productInfoContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: 'flex-start'
          }}
        >
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
          <div className="sizeContainer" style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: '100%'
        }}>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>Xl</button>
            <button>XXL</button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    );
  }
}
