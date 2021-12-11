import React from 'react';
import styled from 'styled-components';

const Unlock = styled.div`
    // height:50rem;
    position: relative;
    width: 100vw;
    height: 60rem;
    display: flex;
    flex-flow: column;
    background-color: ${({ theme: { color } }) => color.secondaryBlue};

    align-items: center;
`;

const VideoBackground = styled.video`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    width: auto;
    height: 100%;
`;

const Gradient = styled.div`
    background: linear-gradient(
        125deg,
        ${({ theme: { color } }) => color.secondaryBlue} 44%,
        transparent
    );
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
    width: 899px;
    height: 100%;
`;
const Text = styled.span`
    font-size: 3rem;
    color: ${({ theme: { color } }) => color.white};
    z-index: 3;
`;

const RedBik= styled.span`
    color: red;
`

const LodzZoomText = styled.span`
    z-index: 2;
    font-size: 6rem;
    color: white;
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
`;

export default function UnlockTitle() {
    return (
        <Unlock>
            <Gradient></Gradient>
            <VideoBackground muted width="899" height="707" autoPlay>
                <source src="/lodz.webm" type="video/webm" />
                Your browser does not support the video tag.
            </VideoBackground>

            <LodzZoomText>Unlock power of boat city with <RedBik> BIK</RedBik> api</LodzZoomText>

        </Unlock>
    );
}
