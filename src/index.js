import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import chat from './reducers';
    
const store = createStore(chat);
const element = document.getElementById('root');
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(app, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
