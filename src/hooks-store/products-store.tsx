import { initStore } from './store';
import { IProduct } from '../types'

const products = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    addedToCart: false
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    addedToCart: false
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    addedToCart: false
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    addedToCart: false
  }
]

const configureStore = () => {
  const actions = {
    ADDED_TO_CART: (state: any, id: string) => {
      let targetIndex = state.products.findIndex((p: IProduct) => p.id === id)
      let updatedProducts = [...state.products];
      updatedProducts[targetIndex] = {
        ...state.products[targetIndex],
        addedToCart: !state.products[targetIndex].addedToCart
      }
      return { products: updatedProducts }
    }
  }

  initStore(actions, { products })
}

export default configureStore;
