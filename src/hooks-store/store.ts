import { useState, useEffect } from 'react';

let globalState: any = {};
let listeners: ((data: string) => void)[] = [];
let actions: any = {};

/*
Uses the sub/pub design pattern
Create objects outside of the hook scope
Create a global state outside the hook scope
Create actions to update the global state
Add listers to call anon function when state updates
*/

/*
Hook allows and Comonent using it access to the global state by returning 
the globalstate object the the components local states via the useState hook
dispatch events that will trigger listener functions to update return an upated global state
Once an action is dispatched every function listening to that action will be executed.
*/

export const useStore = () => {
  const setState = useState(globalState)[1];
  const dispatch = (actionIdentifier: string, payload: any) => {
    const newState = actions[actionIdentifier as keyof typeof actions](
      globalState,
      payload
    );
    globalState = { ...globalState, ...newState };

    for (let listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((l) => l !== setState);
    };
  }, [setState]);

  return { globalState, dispatch };
};

/* 
  Provide a way to add items to the globalstate and actions objects
*/

export const addToStore = <Actions extends Object, State extends object>(
  userActions: Actions,
  initialState: State
) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
