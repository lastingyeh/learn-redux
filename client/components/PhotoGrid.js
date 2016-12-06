//9.create PhotoGrid...
import React, {Component} from 'react';
import Photo from './Photo';

//use props.posts to map "Photo" components...
class PhotoGrid extends Component {

    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) =>
                    <Photo {...this.props}
                           key={i}
                           i={i}
                           post={post}/>
                )}
            </div>
        );
    }
}

export default PhotoGrid;