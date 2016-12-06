//4.reducers add Likes state change...

//a reducer takes in two things:

//(1)the action (into about what happened)
//(2)copy of current state

function posts(state = [], action) {
    //data from actions return...
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i),//before the one updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)//after the one we are updating
            ]
        default:
            return state;
    }
}

export default posts;