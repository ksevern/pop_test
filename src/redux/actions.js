import {
    AUTH_ERROR,
    FETCH_POSTS,
    LOGIN,
    LOGOUT,
    INIT,
    START_LOADING,
    STOP_LOADING,
    USER_CORRECT,
    USER_INCORRECT
} from './types';

export function initApp() {
    return (dispatch) => {
        if (localStorage.getItem('user')) {
            const { id, name } = JSON.parse(localStorage.getItem('user'));

            dispatch({
                type: LOGIN,
                payload: { id, name }
            });
        }

        dispatch({ type: INIT });
    }
}

export function checkUser(login, password) {
    return (dispatch) => {
        if (login === 'login' && password === 'password') {
            dispatch(userCorrect());
        } else {
            dispatch(userIncorrect());
        }
    }
}

export function userCorrect() {
    return { type: USER_CORRECT }
}

export function userIncorrect() {
    return { type: USER_INCORRECT }
}

export function login() {
    return async (dispatch) => {
        try {
            dispatch(startLoading());

            const response = await fetch('http://jsonplaceholder.typicode.com/users?id=7');
            const json = await response.json();

            localStorage.setItem('user', JSON.stringify(json[0]));

            dispatch({
                type: LOGIN,
                payload: json[0]
            });
        } catch (error) {
            console.error(`При получении данных произошла ошибка: ${error}`);
            dispatch(authError(`Произошла ошибка, попробуйте еще раз`));
        } finally {
            dispatch(stopLoading());
        }
    }
}

export function logout() {
    return (dispatch) => {
        localStorage.clear();
        dispatch({
            type: LOGOUT,
            payload: {
                id: null,
                name: null
            }
        });
        dispatch(fetchPosts());
    }
}

export function fetchPosts() {
    return async (dispatch, getState) => {
        if (getState().auth.isAuthenticated) {
            try {
                dispatch(startLoading());

                const response = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${getState().auth.id}`);
                const json = await response.json();

                dispatch({
                    type: FETCH_POSTS,
                    payload: json
                });
            } catch (error) {
                console.error(`При получении данных произошла ошибка: ${error}`);
            } finally {
                dispatch(stopLoading());
            }
        } else {
            dispatch({
                type: FETCH_POSTS,
                payload: []
            });
        }
    }
}

export function startLoading() {
    return { type: START_LOADING }
}

export function stopLoading() {
    return { type: STOP_LOADING }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: { error }
    }
}


