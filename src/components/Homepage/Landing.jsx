import React from 'react';
import styled from 'styled-components';
import Separator from '../Generic/Separator';
import Explain from './Explain';
import UnlockTitle from './UnlockTitle';
import Motivation from './Motivation';

const Main = styled.div`
    background-color: ${({ theme: { color } }) => color.white};
    overflow:hidden;
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    flex-flow: column;
    height: auto;
`;


export default function Landing() {
    return (
        <Main>
            <UnlockTitle />
            <Separator />
            <Explain />
            <Motivation/>
        </Main>
    );
}
