import React from 'react'
import './Product.css'
function Product({id,title,price,rating,image}) {
    return (
        <div>
            <h1> {id}{title}{price} </h1>
            <img src={image}/>
        </div>
    )
}

export default Product