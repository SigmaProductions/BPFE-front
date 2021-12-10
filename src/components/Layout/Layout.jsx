import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    width: 1400px;
    height: 100%;
    color: black;
    background-color: ${({ theme: { color } }) => color.white};
`;

export const Navbar = styled.nav`
    display: flex;
    flex-direction: column;
    height: 8rem;
    width: 100%;
    border-bottom: 1px ${({ theme: { color } }) => color.brown} solid;
`;

export default function Layout({ children }) {
    return (
        <PageContainer>
            <Navbar></Navbar>
            {children}
        </PageContainer>
    );
}
