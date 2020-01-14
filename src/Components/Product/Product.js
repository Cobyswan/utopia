
import React, { Component } from 'react'
import axios from 'axios'


export default class Product extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:8000/api/products`).then(res => {
      console.log(res.data)
      this.setState({products: res.data})
    })
  }
  render() {
    console.log(this.state.products)
    return (
      <div>
        Products
      </div>
    )
  }
}

