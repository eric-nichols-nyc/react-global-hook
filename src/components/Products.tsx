import React from 'react'
import Product from './Product';
import { useStore } from '../hooks-store/store';
import { IProduct } from '../types'

const Products: React.FC = () => {
  const { globalState } = useStore()
  const { products } = globalState
  
  return (
    <div className="products">
      {
        products.map((p: IProduct) =>
          <Product key={p.id} id={p.id} title={p.title} description={p.description} addedToCart={p.addedToCart} />
        )
      }
    </div>
  )
}

export default Products
