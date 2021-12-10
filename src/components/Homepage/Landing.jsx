import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import UnlockTitle from './UnlockTitle';

const Main = styled.div`
    background-color: ${({ theme: {color} }) => color.white};
    display: flex;
    flex-flow: column;
    height:100%;
    width:100%
`;

export default function Landing() {
    return (
        <Main>
            <Title/>
            <UnlockTitle/>
        </Main>
    );
}
