import React, { useState, useEffect } from 'react'
import { useStore } from '../hooks-store/store'
import { IProduct } from '../types'

const Product: React.FC<IProduct> = (data) => {
  const { id, title, description, addedToCart } = data
  const { dispatch } = useStore();
  const [addedCopy, setAddedCopy] = useState('add to cart');


  const addRemoveFromCart = (bool: boolean) => {
    if(!bool){
      dispatch('ADDED_TO_CART', id)
      dispatch('ADD_TO_CART', id)
    }else{
      dispatch('ADDED_TO_CART', id)
      dispatch('REMOVE_FROM_CART', id)
    }
  }

  useEffect(() => {
    if (!addedToCart) {
      setAddedCopy('add to cart')
   
    } else {
      setAddedCopy('remove from cart')
    }

  }, [addedToCart])

  return (
    <div className="product">
      <div className="title">{title}</div>
      <img src="https://via.placeholder.com/150" alt="adfsf" />
      <div className="desc">{description}</div>
      <button className="addtocart" onClick={() => {  addRemoveFromCart(addedToCart) }}>{addedCopy}</button>
    </div>
  )
}

export default Product