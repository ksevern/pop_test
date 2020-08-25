import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions';
import Post from './Post';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 120px auto;
    max-width: 90%;
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.div`
    width: 100%;
    padding: 16px;
    
    @media (min-width: 768px) {
        width: ${100/2}%;
    }
    
    @media (min-width: 1024px) {
        width: ${100/3}%;
    }
`;

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchedPosts);
    const isLoading = useSelector((state) => state.app.isLoading);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    if (isLoading || !posts.length) {
        return null;
    }

    return (
        <Wrapper>
            { posts.map((post) => (
                <Item key={post.id}>
                    <Post post={post} />
                </Item>
            ))}
        </Wrapper>
    );
}

export default Posts;
