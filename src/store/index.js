import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import rootReducer from "../reducers";

  function saveToLocalStorage(state) {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  }
  
  function loadFromLocalStorage() {
  const serializedState = localStorage.getItem('state');
  if (serializedState === null) return undefined;
     return JSON.parse(serializedState);
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const presistedState = loadFromLocalStorage();
  const store = createStore(
      rootReducer,
      presistedState, composeEnhancers(applyMiddleware(reduxThunk)),
   );
  store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;