import React from 'react';
import styled from 'styled-components';
import Explain from './Explain';
import UnlockTitle from './UnlockTitle';

const Main = styled.div`
    background-color: ${({ theme: {color} }) => color.secondaryBlue};
    position: absolute;
    left:0;
    right:0;
    display: flex;
    flex-flow: column;
    height:100%;
`;

const Separator = styled.div`
  width: 100%;
  height: 10%;
  background: ${({theme: {color}})=> color.white};
  z-index: 2;
  transform: skewY(3deg);
  transform-origin: top right;
  `
export default function Landing() {
    return (
        <Main>
            <UnlockTitle/>
            <Separator/>
            <Explain/>
        </Main>
    );
}
