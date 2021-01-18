import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';

const middleware = [thunk];

let preloadedState = {};
const persistedDevString = localStorage.getItem('devCommunity');
if (persistedDevString) {
  preloadedState = {
    devCommunity: JSON.parse(persistedDevString)
  }
}

const store = createStore(rootReducer, preloadedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;