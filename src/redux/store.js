import { createStore } from 'redux';
import userReducer from './reducers/userReducer';
import postsReducer from './reducers/postsReducer';
import topicsReducer from './reducers/topicsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userReducer,
    postsReducer,
    topicsReducer
})

export default createStore(rootReducer);