import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {authReducer} from './authReducer';
import {postsReducer} from './postsReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    posts: postsReducer
});
