import { initStore } from './store';
import { IProduct } from '../types';

const initialState = {
  cart: [],
};

export const configureStore = () => {
  const actions = {
    ADD_TO_CART: (state: any, id: string) => {
      const product = state.products.find((p: IProduct) => p.id === id);
      state.cart.push(product);
    },
    REMOVE_FROM_CART: (state: any, id: string) => {
      const updatedCart = state.cart.filter((p: IProduct) => p.id !== id);
      console.log(updatedCart);
      return { cart: updatedCart };
    },
  };

  initStore(actions, initialState);
};

export default configureStore;
