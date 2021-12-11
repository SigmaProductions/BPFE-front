import React from 'react';
import styled from 'styled-components';
import Separator from '../Generic/Separator';
import Explain from './Explain';
import UnlockTitle from './UnlockTitle';

const Main = styled.div`
    background-color: ${({ theme: { color } }) => color.white};
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
        </Main>
    );
}
