import React from 'react'
import './size.css'


export default function Size(props) {
    let { size, stock } = props
    let getStock = () => {
        if (stock[size] >= 1) {
            return <button className='inStockButton'>{size.toUpperCase()}</button>
        }
        else {
            return <button className='outOfStockButton' disabled>{size.toUpperCase()}</button>
        }

    }
    return getStock();
} 