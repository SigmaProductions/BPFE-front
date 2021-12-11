import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const PageContainer = styled.div`
    width: 1400px;
    min-width: 1400px;
    height: 100%;
    color: black;
    background-color: ${({ theme: { color } }) => color.white};
`;

export default function Layout({ children }) {
    return (
        <PageContainer>
            <Navbar />
            {children}
        </PageContainer>
    );
}
