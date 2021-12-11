import React from 'react'
import styled from "styled-components";

const ExplainContainer= styled.div`
background-color: ${({theme: {color}})=> color.secondaryBlue};
padding:4rem;
display: flex;
flex-flow: column;
`

const ExplanationBox= styled.div`
    background-color: ${({theme: {color}})=> color.white};
    width:50%;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px;
`

export default function Explain() {
    return (
        <ExplainContainer>
                <ExplanationBox >How does it work?</ExplanationBox>

            <div data-aos="fade-left">
                Select places
            </div>

            <div data-aos="fade-right">
                Tell us about Your needs
            </div>

            <div data-aos="fade-left">
                Get scoring of potential locals with BIK powered business data
            </div>
        </ExplainContainer>
    )
}
