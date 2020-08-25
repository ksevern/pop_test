import React from 'react';
import {Link} from 'react-router-dom';
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

const Heading = styled.h1`
    text-align: center;
    font-size: 24px;
`;

const BackLink = styled.div`
    margin-top: 24px;
    font-size: 18px;

    a {
        display: block;
        text-decoration: none;
        color: #0984e3;
    }
`;

function NotFound() {
    return (
        <Wrapper>
            <Heading>Страница не найдена</Heading>
            <BackLink>
                <Link to="/">Перейти на главную</Link>
            </BackLink>
        </Wrapper>
    )
}

export default NotFound;
