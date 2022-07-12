import { useState, useEffect } from 'react';

let globalState:any = {};
let listeners: ((data: string) => void)[] = [];
let actions:any = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier: string, payload: string) => {
    const newState = actions[actionIdentifier as keyof typeof actions](globalState, payload);
    globalState = {...globalState, ...newState}

    for(let listener of listeners){
      listener(globalState)
    }
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((l) => l !== setState)
    }
  }, [setState])
  

  return {globalState, dispatch}
};

export const initStore = <Actions extends Object, State extends object>(userActions:Actions, initialState:State) => {
  if(initialState){
    globalState = {...globalState, ...initialState}
  }

  actions = {...actions, ...userActions}
};
