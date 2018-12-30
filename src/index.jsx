import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Promisse from 'redux-promise';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import App from './main/app';
import Reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
                && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(Promisse, multi, thunk)(createStore)(Reducers, devTools);
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);