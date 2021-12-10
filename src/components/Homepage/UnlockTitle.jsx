import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
    font-size: 2rem;
`
const Unlock = styled.div`
    // height:50rem;
    position: relative;
    width:80vw;
    height:60rem;
    display: flex;
    flex-flow: column;
`

const VideoBackground = styled.video`
    position: absolute;
    top:0;
    left:0; 
    z-index: 1;
    width:60rem;
    height:60rem;
`

const Gradient = styled.div`
    background: linear-gradient(125deg, red , transparent);
    position:absolute;
    z-index: 10;
    top:0;
    left:0; 
    width:60rem;
    height:60rem;
    
`


export default function UnlockTitle() {
    return (
        <Unlock>
            <Gradient>

            </Gradient>
            <VideoBackground muted width="899" height="707" autoPlay>
                <source src="/lodz.webm" type="video/webm" />
                Your browser does not support the video tag.
            </VideoBackground>
            <Text>Unlock power of boat city with BIK Api</Text>
        </Unlock>
    )
}
