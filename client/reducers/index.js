//3. create rootReducer...

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';

//reducer combineReducers posts && comments && routing:routerReducer....
const rootReducer = combineReducers({
    posts,
    comments,
    routing: routerReducer
});

export default rootReducer;
