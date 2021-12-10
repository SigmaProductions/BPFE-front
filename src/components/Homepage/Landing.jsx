import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Main = styled.div`
    background-color: ${({ theme: color }) => color.primaryBlue};
`;

export default function Landing() {
    return (
        <Main>
            <Title />
            dsf
            <video controls  width="320" height="240" autoPlay>
                <source preload="auto" src="/lodz.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            sdf
        </Main>
    );
}
