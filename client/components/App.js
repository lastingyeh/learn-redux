//7.integration components...

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

//use state.posts && state.comments to props...
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

//use dispatch from actions to props...
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

//connect state && props to Main...
const App = connect(mapStateToProps,
    mapDispatchToProps)(Main);

export default App;