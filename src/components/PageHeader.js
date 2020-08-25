import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/actions';
import IconLogout from './Icons/IconLogout';
import IconAccount from './Icons/IconAccount';
import styled from 'styled-components';

const Header = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 8px 16px;
    
    svg {
        display: block;
    }
`;

const Account = styled.div`
    margin-right: 24px;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1;
`;

const AccountIcon = styled.span`
    display: block;
    padding: 8px;
    margin-right: 12px;
    background-color: #dfe6e9;
    border-radius: 2px;
`;

const LogoutButton = styled.button`
    display: block;
    border: none;
    margin: 0;
    padding: 8px;
    width: auto;
    text-align: inherit;
    cursor: pointer;
    background-color: transparent;
    color: transparent;
    text-align: center;
    font-size: 0;
    line-height: 0;
    transition: opacity 0.3s ease-out;
`;

function PageHeader() {
    const name = useSelector((state) => state.auth.name);
    const dispatch = useDispatch();

    return (
        <Header>
            <Account>
                <AccountIcon>
                    <IconAccount />
                </AccountIcon>
                {name}
            </Account>
            <LogoutButton onClick={() => dispatch(logout())}>
                <IconLogout />
                Выйти
            </LogoutButton>
        </Header>
    )
}

export default PageHeader;