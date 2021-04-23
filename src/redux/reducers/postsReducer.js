const initialState = {
    posts: []
}

const UPDATE_POSTS = 'UPDATE_POSTS';

export function updatePost(postObjArr) {
    return {
        type: UPDATE_POSTS,
        payload: postObjArr
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default: return state;
    }
}