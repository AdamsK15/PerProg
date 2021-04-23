const initialState = {
    topics: []
}

const UPDATE_TOPICS = 'UPDATE_TOPICS';

export function updateTopics(topicObjArr) {
    return {
        type: UPDATE_TOPICS,
        payload: topicObjArr
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