import React, { useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

import { GenericButton } from '../Generic/Buttons';
import CustomCarousel from './CustomCarousel';
import OPTIONS, { MAIN_OPTION_NAMES } from '../../Consts/options';
import { firstLetterUpperCase } from '../../utils/utils';
import HouseList from '../HouseList/HouseList';
import SearchResultScreen from '../SearchResultScreen/SearchResultScreen';
import { FIRST_QUESTION } from '../../Consts/questions';

const FormContainer = styled.div`
    margin-top: 6rem;
    display: flex;
    height: auto;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    background-color: ${({ theme: { color } }) => color.white};
    border: 1px ${({ theme: { color } }) => color.primaryBlue} solid;
`;

const FormHeader = styled.h1`
    color: ${({ theme: { color } }) => color.secondaryBlue};
    font-size: 4rem;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xthin};
`;

const FormButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 2rem 10rem 0 10rem;
    justify-content: center;
`;

const FormButton = styled(GenericButton)`
    :focus,
    :active {
        color: ${({ theme: { color } }) => color.white};
        background-color: ${({ theme: { color } }) => color.secondaryBlue};
    }
    :hover {
        color: ${({ theme: { color } }) => color.white} !important;
        background-color: ${({ theme: { color } }) => color.secondaryBlue} !important;
    }

    margin-bottom: 1rem;
    color: ${({ theme: { color }, $isSelected }) =>
        $isSelected ? color.white : color.secondaryBlue} !important;
    background-color: ${({ theme: { color }, $isSelected }) =>
        $isSelected ? color.secondaryBlue : color.white} !important;
`;

const CustomAccordion = styled(Accordion)`
    width: 25rem;
    margin-left: 2rem;

    button {
        font-size: ${({ theme: { fontSize } }) => fontSize.large};
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
    .accordion-item {
        border-color: ${({ theme: { color } }) => color.lightBlue};
    }
    .accordion-body {
        display: flex;
        flex-direction: column;
    }
    .accordion-button {
        color: ${({ theme: { color } }) => color.secondaryBlue};
    }
`;

const SearchButton = styled(FormButton)`
    margin-top: 2rem;
    width: 30rem;
    height: 5rem;
`;

const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    margin-bottom: 3rem;
`;

const MainButtons = styled(FormButton)`
    width: 25rem;
    height: 6rem;
`;

const RowHeader = styled.h2`
    color: ${({ theme: { color } }) => color.secondaryBlue};
    font-size: ${({ theme: { fontSize } }) => fontSize.turbo};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xthin};
`;

const ButtonRow = styled.div`
    display: flex;

    button {
        font-size: 1.8rem;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
        margin-left: 2rem;
    }
`;

async function sleep() {
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
}

const otherQuestion = {
    title: 'Some other question',
    options: ['option1', 'option2', 'option3'],
};

export default function ChartForm() {
    const [loading, setLoading] = useState(false);
    const [currentQuestions, setCurrentQuestions] = useState(FIRST_QUESTION);
    const [allQuestions, setAllQuestions] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [finalDecision, setFinalDecision] = useState(null);

    async function mockupApiCall() {
        setLoading(true);
        await sleep();
        setCurrentQuestions(otherQuestion);
        setFinalDecision(true);
        setLoading(false);
    }
    return (
        <>
            <CustomCarousel />
            <FormContainer>
                {!finalDecision ? (
                    <>
                        <FormHeader>Czego szukasz?</FormHeader>
                        <FormRow>
                            <RowHeader>{currentQuestions.title}</RowHeader>
                            <ButtonRow>
                                {currentQuestions.options.map((option) => (
                                    <MainButtons
                                        onClick={(e) => setSelectedAnswer(e)}
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </MainButtons>
                                ))}
                            </ButtonRow>
                        </FormRow>
                        <SearchButton onClick={() => mockupApiCall()}>
                            {loading ? <Spinner animation="border" /> : 'JEDZIEMY!'}
                        </SearchButton>
                    </>
                ) : (
                    <SearchResultScreen />
                )}
            </FormContainer>
        </>
    );
}
