import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {checkUser, login} from '../redux/actions';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    flex: 0 0 auto;
    background-color: white;
    border-radius: 6px;
    padding: 24px;
`;

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    text-align: center;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 16px;
    padding: 12px;
    appearance: none;
    border: 1px solid #b2bec3;
    border-radius: 2px;
    font-size: 16px;
    line-height: 1;
    transition: border 0.3s ease-out;
    
    &:focus {
        border-color: #00cec9;
    }
    
    &::placeholder {
        font-size: 16px;
        line-height: 1;
        color: #2d3436;
        opacity: 0.3;
    }
`;

const Button = styled.button`
    display: block;
    border: none;
    margin: 0;
    padding: 16px;
    width: 100%;
    text-align: inherit;
    cursor: pointer;
    background-color: #00cec9;
    opacity: ${props => props.disabled ? 0.35 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
    color: white;
    text-align: center;
    font-size: 20px;
    line-height: 1;
    transition: opacity 0.3s ease-out;
`;

const Error = styled.p`
    margin-top: 24px;
    text-align: center;
    color: #d63031;
`;

function Auth() {
    const [user, setUser] = useState({
        login: '',
        password: ''
    });
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.app.isLoading);
    const isUserCorrect = useSelector((state) => state.auth.isUserCorrect);
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const error = useSelector((state) => state.auth.error);

    useEffect(() => {
        if (isAuth) {
            setUser({
                login: '',
                password: ''
            });
        }
    }, [isAuth]);

    function handleInputChange(event) {
        event.persist();

        setUser((prev) => {
            const newState = {
                ...prev,
                [event.target.name]: event.target.value
            };

            dispatch(checkUser(
                newState.login,
                newState.password
            ));

            return newState;
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!isUserCorrect) {
            return;
        }

        dispatch(login());
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Heading>Вход</Heading>
            <Input
                type="text"
                name="login"
                placeholder="Логин"
                value={user.login}
                onChange={handleInputChange}
            />
            <Input
                type="password"
                name="password"
                placeholder="Пароль"
                value={user.password}
                onChange={handleInputChange}
            />
            <Button
                type="submit"
                disabled={isLoading || !isUserCorrect}
            >Войти</Button>
            { error ? <Error>{error}</Error> : null }
        </Form>
    );
}

export default Auth;
