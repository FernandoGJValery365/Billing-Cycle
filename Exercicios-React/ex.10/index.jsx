import React from 'react';
import ReactDom from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import fieldReducer from './fieldReducer';

import Field from './fields';

const reducers = combineReducers({
    field: fieldReducer
});

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field />
    </Provider>,
    document.getElementById('app')
    
);