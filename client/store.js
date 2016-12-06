//2.store combines.

import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//import init-data from comments && posts...
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
    posts,
    comments
};

//debug with chrome of Redux
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f);

//create store && initial state && debug-Redux from "createStore"
const store = createStore(rootReducer, defaultState, enhancers);

//set history from browserHistory & store
export const history = syncHistoryWithStore(browserHistory, store);

//resolves auto-hot reloading problems...
if (module.hot) {

    module.hot.accept('./reducers/index', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

//export store object...
export default store;

