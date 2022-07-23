import React, { useState, useEffect } from 'react'
import { useStore } from '../hooks-store/store'
import { IProduct } from '../types'

export const Button = (data: { id: string, addedToCart: boolean }) => {
  const { id, addedToCart } = data;
  const { dispatch } = useStore();
  const [addedCopy, setAddedCopy] = useState('add to cart');

  const addRemoveFromCart = (bool: boolean) => {
    if (!bool) {
      dispatch('ADDED_TO_CART', id)
      dispatch('ADD_TO_CART', id)
    } else {
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
    <button className={`addtocart ${addedToCart ? 'remove' : ''}`} onClick={() => { addRemoveFromCart(addedToCart) }}>{addedCopy}</button>
  )
}


const Product: React.FC<IProduct> = (data) => {
  const { id, title, description, addedToCart } = data

  return (
    <div className="product">
      <div className="title">{title}</div>
      <img src="https://via.placeholder.com/150" alt="adfsf" />
      <div className="desc">{description}</div>
      <Button id={id} addedToCart={addedToCart} />
    </div>
  )
}

export default Product