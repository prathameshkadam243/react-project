import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
  return (
    props.products.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}/>
    })
  )
}
