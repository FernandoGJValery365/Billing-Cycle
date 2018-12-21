import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Promisse from 'redux-promise';

import App from './main/app';
import Reducers from './main/reducers';

const store = applyMiddleware(Promisse)(createStore)(Reducers);
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);