import React, { useState } from "react";

export default function Product(props) {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");

  return (
    <div className="mainProductContainer">
      <div className="productImageContainer">
        <img>{productImage}</img>
      </div>
      <div className="productInfoContainer">
        <div className="productTitle">{productTitle}</div>
        <div className="productPrice">{productPrice}</div>
      </div>
    </div>
  );
}
