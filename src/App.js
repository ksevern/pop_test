import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import {ProtectedRoute} from './router/ProtectedRoute';
import {PublicRoute} from './router/PublicRoute';
import {useDispatch, useSelector} from 'react-redux';
import {initApp} from './redux/actions';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import AuthPage from './pages/AuthPage';
import PostsPage from './pages/PostsPage';
import NotFound from './components/NotFound';

const GlobalStyle = createGlobalStyle`
    ${reset}
  
    html {
        height: 100%;
        background-color: #dfe6e9;
        font-family: sans-serif;
        color: #2d3436;
    }
    
    body {
        min-width: 320px;
        overflow: auto;
    }
  
    * {
        box-sizing: border-box;
        outline: none;
    }
`;

function App () {
    const dispatch = useDispatch();
    const isReady = useSelector((state) => state.app.isReady);

    useEffect(() => {
        dispatch(initApp());
    }, []);

    if (!isReady) {
        return null;
    }

    return (
        <>
            <GlobalStyle />
            <Router>
                <Switch>
                    <ProtectedRoute component={PostsPage} path="/" exact />
                    <PublicRoute component={AuthPage} path="/auth" />
                    <Route component={NotFound} path="*" />
                </Switch >
            </Router>
        </>
    )
}

export default App;
