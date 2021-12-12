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
    border-style: solid;
    max-width: 40%;
    border-width: ${({where})=> where=="right"? '4px 4px 0px 0px' : '4px 0px 0px 4px'};
    border-radius:2px;
    height: 20rem;
    font-size: 7rem;
    color: ${({theme: {color}})=> color.white};

flex-flow: row;
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
const SmallExplanation= styled.span`
align-text:left;
width:100%
margin-top:9rem;
font-size: 3rem;
`

export default function Explain() {
    return (
        <ExplainContainer>
            <ExplanationBox where="left" data-aos="fade-right">Jak to działa?
            <SmallExplanation>Nasz system pozwala połączyć wiedzę o produkcie z ogromem danych BIK</SmallExplanation></ExplanationBox>
            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>

            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>
            <ExplanationBox where="right" data-aos="fade-left">Zbuduj system
            <SmallExplanation>Połącz swoją wiedzę domenową z danymi tworząc system ekspercki</SmallExplanation></ExplanationBox>

            <ExplanationBox where="left" data-aos="fade-right">Udostępnij 
            <SmallExplanation>Przedstaw system swoim klientom- użyj naszego dynamicznego kwestionariusza, lub wykorzystaj API</SmallExplanation></ExplanationBox>
            <ExplanationImage src="/piotrowska.jpg"></ExplanationImage>

        </ExplainContainer>
    );
}
