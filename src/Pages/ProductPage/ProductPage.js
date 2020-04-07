import React, { Component } from "react";
import axios from "axios";
import Size from "../../Components/Size/Size";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      small: false,
      medium: false,
      large: false,
      xl: false,
      xxl: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/product/${this.props.match.params._id}`)
      .then(res => {
        this.setState({ product: res.data[0] });
      });
  }



  render() {
    let { product } = this.state;
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
            {
              (product.stock)
              ?
            <Size stock={product.stock} size={'small'}></Size>
            :
            <div>Getting stock...</div>
            }
            {
              (product.stock)
              ?
            <Size stock={product.stock} size={'medium'}></Size>
            :
            <div>Getting stock...</div>
            }
            {
              (product.stock)
              ?
            <Size stock={product.stock} size={'large'}></Size>
            :
            <div>Getting stock...</div>
            }
            {
              (product.stock)
              ?
            <Size stock={product.stock} size={'xl'}></Size>
            :
            <div>Getting stock...</div>
            }
            {
              (product.stock)
              ?
            <Size stock={product.stock} size={'xxl'}></Size>
            :
            <div>Getting stock...</div>
            }
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    );
  }
}
