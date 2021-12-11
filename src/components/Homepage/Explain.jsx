import React from 'react';
import styled from 'styled-components';

const ExplainContainer = styled.div`
    background-color: ${({ theme: { color } }) => color.secondaryBlue};
    padding: 4rem;
    padding-top:0;
    // margin-top:-6rem;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`;

const ExplanationBox = styled.div`
    // flex-basis: 50%;
    border-style: solid;
    max-width: 40%;
    // 3px 0px 0px 3px
    border-width: ${({where})=> where=="right"? '4px 4px 0px 0px' : '4px 0px 0px 4px'};
    border-radius:2px;
    height: 20rem;
    font-size: 7rem;
    color: ${({theme: {color}})=> color.white};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding:2rem;
`;
const ExplanationImage = styled.div`
    width: 50%;
    min-width: 70rem;
    height: 70rem;
    background-image: linear-gradient(to bottom,
        ${({theme: {color}})=> color.secondaryBlue},
        ${({theme: {color}})=> color.primaryBlue}40),
        url('${({src})=>src }');
    background-size: cover;
    margin:5rem;
    margin-top:0;
`;

export default function Explain() {
    return (
        <ExplainContainer>
            <ExplanationBox where="left" data-aos="fade-right">How does it work?</ExplanationBox>
            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>

            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>
            <ExplanationBox where="right" data-aos="fade-left">Select places</ExplanationBox>

            <ExplanationBox where="left" data-aos="fade-right">Tell us about Your needs</ExplanationBox>
            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>

            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>
            <ExplanationBox where="right" data-aos="fade-left">
                Get scoring of potential locals with BIK powered business data
            </ExplanationBox>
        </ExplainContainer>
    );
}
