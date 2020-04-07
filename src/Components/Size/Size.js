import React from 'react'


export default function Size(props) {
    let { size, stock } = props
    let getStock = () => {
        if (stock[size] >= 1) {
            return <button>{size}</button>
        }
        else {
            return <button disabled style={{ color: 'black' }}>{size}no stock</button>
        }

    }
    return getStock();
} 