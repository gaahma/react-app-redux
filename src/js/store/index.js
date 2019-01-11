import {createStore} from 'redux';
import rootReducer from '../reducers/index';//think the /index can be skipped if we're gonna call it index.js

const store = createStore(rootReducer);

export default store;
