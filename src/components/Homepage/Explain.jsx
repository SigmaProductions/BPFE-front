import React from 'react';
import styled from 'styled-components';

const ExplainContainer = styled.div`
    background-color: ${({ theme: { color } }) => color.secondaryBlue};
    padding: 4rem;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    align-items: center;
`;

const ExplanationBox = styled.div`
    flex-basis: 50%;
    background-color: ${({ theme: { color } }) => color.white};
    height: 20rem;
    font-size: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 2px;
    padding: 2rem;
`;
const ExplanationImage = styled.img`
    width: 50%;
    background: linear-gradient(#e66465, #9198e5);
`;

export default function Explain() {
    return (
        <ExplainContainer>
            <ExplanationBox data-aos="fade-right">How does it work?</ExplanationBox>
            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>

            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>
            <ExplanationBox data-aos="fade-left">Select places</ExplanationBox>

            <ExplanationBox data-aos="fade-right">Tell us about Your needs</ExplanationBox>
            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>

            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>
            <ExplanationBox data-aos="fade-left">
                Get scoring of potential locals with BIK powered business data
            </ExplanationBox>
        </ExplainContainer>
    );
}
