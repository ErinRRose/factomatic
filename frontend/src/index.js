import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import factsReducer from './reducers/factsReducer';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(factsReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
      <App />  
  </Provider>,
  document.getElementById('root')
);
