import {
    AUTH_ERROR,
    LOGIN,
    LOGOUT,
    USER_CORRECT,
    USER_INCORRECT
} from './types';

const initialState = {
    id: null,
    name: null,
    isUserCorrect: false,
    isAuthenticated: false,
    error: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                ...action.payload,
                isUserCorrect: false,
                isAuthenticated: false
            }
        case USER_CORRECT:
            return {
                ...state,
                error: false,
                isUserCorrect: true
            };
        case USER_INCORRECT:
            return {
                ...state,
                error: false,
                isUserCorrect: false
            };
        case AUTH_ERROR:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: false
            };
        default:
            return state;
    }
};
