//Task List:
//1. Add in all necessary components and libary methods.
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import "./index.css";
import App from "./App";

//2. Create a store that includes thunk middleware support.
const store = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root");

//3. Wrap the App component in a react-redux Provider element.
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
  
