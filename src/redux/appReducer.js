import {INIT, START_LOADING, STOP_LOADING} from './types';

const initialState = {
    isLoading: false,
    isReady: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {...state, isReady: true};
        case START_LOADING:
            return {...state, isLoading: true};
        case STOP_LOADING:
            return {...state, isLoading: false};
        default:
            return state;
    }
};
