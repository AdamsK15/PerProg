// initial state
const initialState = {
    user: null,
    isLoggedIn: false
}

// action types
const UPDATE_USER = 'UPDATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// action creators
export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return initialState;
        default: return state
    }
}