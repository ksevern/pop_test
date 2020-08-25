import React from 'react';
import Auth from '../components/Auth';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    max-width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 24px 0;
`;

const AuthPage = () => (
    <Wrapper>
        <Auth />
    </Wrapper>
);

export default AuthPage;
