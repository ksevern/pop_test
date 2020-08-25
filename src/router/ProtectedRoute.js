import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export function ProtectedRoute({ component: Component, ...rest }) {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Route
            {...rest}
            render={({ location }) => (
                isAuth
                    ? <Component />
                    : <Redirect to={{
                        pathname: '/auth',
                        state: { from: location }
                    }} />
            )}
        />
    );
}
