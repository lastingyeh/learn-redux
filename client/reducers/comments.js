//5.reducers comments state change...

function postComments(state = [], action) {

    switch (action.type) {
        //Add comment...
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        //Remove comment...
        case 'REMOVE_COMMENT':
            console.log("Removing a comment");
            return [
                //from the state to the one we want to delete
                ...state.slice(0, action.i),
                //after the deleted one
                ...state.slice(action.i + 1)
            ]
            return state;
        default:
            return state;
    }
}

//data from actions return...
function comments(state = [], action) {

    if (typeof action.postId !== 'undefined') {
        return {
            //take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;
