import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from './reducers';
import {init} from './actions';
import TransparentUI from './components/TransparentUI';

const store=createStore(reducers);
init(store);

ReactDOM.render(
    <Provider store={store}>
        <TransparentUI/>
    </Provider>,
    document.querySelector('#root')
);