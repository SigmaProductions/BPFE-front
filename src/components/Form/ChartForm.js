import React, { useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

import { GenericButton } from '../Generic/Buttons';
import CustomCarousel from './CustomCarousel';
import chart from '../../mockups/chart.json';
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
    flex-wrap: wrap;

    button {
        font-size: 1.8rem;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
        margin-left: 2rem;
    }
`;

export default function ChartForm() {
    const [loading, setLoading] = useState(false);
    const [currentNode, setCurrentNode] = useState(chart);
    const [currentQuestions, setCurrentQuestions] = useState(getOptions(chart));
    const [savedOutputs, setSavedOutputs] = useState([]);
    const [finalDecision, setFinalDecision] = useState(null);

    function getOptions(node) {
        const result = node.exitEdges.map((obj) => obj.target);
        return result;
    }

    function handleSubmit() {
        const newOptions = getOptions(currentNode);

        if (currentNode.type === 'output')
            setSavedOutputs((prevState) => [...prevState, currentNode.data.endpoint]);
        setCurrentQuestions(getOptions(currentNode));

        if (newOptions.length <= 1) {
            if (newOptions[0].type === 'output')
                setSavedOutputs((prevState) => [...prevState, newOptions[0].data.endpoint]);
            return setFinalDecision(true);
        }
    }

    function handleSelectNode({ target }) {
        const { value } = target;
        const option = currentQuestions.find((question) => question.data.label === value);
        setCurrentNode(option);
    }

    return (
        <>
            <CustomCarousel />
            <FormContainer>
                {!finalDecision ? (
                    <>
                        <FormHeader>Czego szukasz?</FormHeader>
                        <FormRow>
                            <RowHeader>Twoje preferncje: </RowHeader>
                            <ButtonRow>
                                {currentQuestions.map((option) => (
                                    <MainButtons
                                        onClick={(e) => handleSelectNode(e)}
                                        key={option.data.label}
                                        $isSelected={currentNode.data?.label === option.data?.label}
                                        value={option.data.label}
                                    >
                                        {option.data.label}
                                    </MainButtons>
                                ))}
                            </ButtonRow>
                        </FormRow>
                        <SearchButton onClick={() => handleSubmit()}>
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
