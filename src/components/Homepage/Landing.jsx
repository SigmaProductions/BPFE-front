import React from 'react';
import styled from 'styled-components';
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

const SeparatorContainer= styled.div`
    margin-top:-10rem;
    width: 100%;
    height: 10rem;
`;
const Separator = styled.div`
    width: 100%;
    height: 10rem;
    background-color: ${({ theme: { color } }) => color.white};
    z-index: 2;
    position:relative;
    transform: skewY(3deg);
    transform-origin: top right;
`;
const SeparatorBackground= styled.div`
    height:10rem;
    width:100%
    top:0;
    left:0;
    z-index: 2;
    background-color: ${({ theme: { color } }) => color.secondaryBlue};
`;

export default function Landing() {
    return (
        <Main>
            <UnlockTitle />
            <SeparatorContainer>
                <SeparatorBackground/>
                <Separator/>
            </SeparatorContainer>
            <Explain />
        </Main>
    );
}
