import React from 'react'
import styled from 'styled-components';

const SeparatorContainer= styled.div`
    margin-top:-10rem;
    width: 100%;
    height: 10rem;
`;
const SeparatorLine = styled.div`
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
export default function Separator() {
    return (
            <SeparatorContainer>
                <SeparatorBackground/>
                <SeparatorLine/>
            </SeparatorContainer>
    )
}

