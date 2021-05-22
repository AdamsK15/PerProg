const initialState = {
    topics: []
}

const UPDATE_TOPICS = 'UPDATE_TOPICS';

export function updateTopics(topicsObjArr) {
    return {
        type: UPDATE_TOPICS,
        payload: topicsObjArr
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TOPICS:
            return {
                ...state,
                topics: action.payload
            }
        default: return state;
    }
}