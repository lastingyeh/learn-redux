//8.build Main components && Link
import React from 'react';
import {Link} from 'react-router';

//render Header && PhotoGrid...
const Main = React.createClass({
    render(){
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram-</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;
