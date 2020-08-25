import React from 'react';
import styled from 'styled-components';

const Body = styled.article`
    height: 100%;
    padding: 32px 24px;
    border-radius: 2px;
    background: white;
`;

const Heading = styled.h4`
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
`;

const Content = styled.p`
    font-family: serif;
    font-size: 20px;
    line-height: 1.4;
`;

const Post = ({ post }) => (
    <Body>
        <Heading>{post.title}</Heading>
        <Content>{post.body}</Content>
    </Body>
);

export default Post;
