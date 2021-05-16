import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import App from './App'
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import catsReducer from './reducers/catsReducer';

const store = createStore(catsReducer, applyMiddleware(thunk));
ReactDOM.render(
    < Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
