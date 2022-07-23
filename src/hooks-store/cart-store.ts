import { addToStore } from './store';
import { IProduct } from '../types';

interface IState {
  cart: IProduct[];
  products: IProduct[];
}

interface ICart {
  cart: IProduct[];
}

const initialState = {
  cart: [],
};

export const configureStore = () => {
  const actions = {
    ADD_TO_CART: (state: IState, id: string) => {
      console.log(state);
      const product = state.products.find((p) => p.id === id);
      if (product) state.cart.push(product);
    },
    REMOVE_FROM_CART: (state: ICart, id: string): ICart => {
      const updatedCart = state.cart.filter((p: IProduct) => p.id !== id);
      return { cart: updatedCart };
    },
  };

  addToStore(actions, initialState);
};

export default configureStore;
