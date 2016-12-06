//1. program start...
import React from 'react';
import {render} from 'react-dom';

//import css
import css from './styles/style.styl';

//import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react-router
import {Router, Route, IndexRoute} from 'react-router';
//Provider of react-redux to support "store"
import {Provider} from 'react-redux';
//get store & history from './store'
import store, {history} from './store';

//main start...
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>)

//Start point...
render(
    router,
    document.getElementById('root')
);