import React, { useEffect, useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

import { GenericButton } from '../Generic/Buttons';
import CustomCarousel from './CustomCarousel';
import chart from '../../mockups/chart.json';
import SearchResultScreen from '../SearchResultScreen/SearchResultScreen';
import { FIRST_QUESTION } from '../../Consts/questions';
import { MAIN_OPTION_NAMES } from '../../Consts/options';
import axios from 'axios';

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
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [response, setResponse] = useState(null);
    let savedOutputs = [];

    function packData() {
        const selectedMainOptions = {};
        selectedOptions
            .filter((option) => MAIN_OPTION_NAMES.includes(option))
            .forEach((option) => (selectedMainOptions[option] = true));
        const defaultMainOptions = {};
        MAIN_OPTION_NAMES.forEach((option) => {
            defaultMainOptions[option] = false;
        });
        const payload = { features: savedOutputs, ...defaultMainOptions, ...selectedMainOptions };
        return payload;
    }

    function handleSelectOption({ target }) {
        const { value: optionName } = target;
        if (selectedOptions.includes(optionName)) {
            setSelectedOptions((prevState) => prevState.filter((option) => option !== optionName));
            return;
        }
        setSelectedOptions((prevState) => [...prevState, optionName]);
    }

    function getOptions(node) {
        const result = node.exitEdges.map((obj) => obj.target);
        return result;
    }

    function handleSubmit() {
        const newOptions = getOptions(currentNode);

        if (currentNode.type === 'output') {
            savedOutputs = [...savedOutputs, currentNode.data.endpoint];
        }

        if (currentNode.exitEdges.length === 0) {
            setCurrentQuestions([]);
            return sendRequest();
        }
        if (newOptions.length <= 1) {
            savedOutputs = [...savedOutputs, newOptions[0].data.endpoint];
            setCurrentQuestions([]);
            return sendRequest();
        }
        setCurrentQuestions(newOptions);
    }

    async function sendRequest() {
        setLoading(true);
        const data = packData();
        try {
            const res = await axios.post('http://fc02-85-14-87-42.ngrok.io/', data);
            setResponse(res.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
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
                {!response ? (
                    <>
                        <FormHeader>Czego szukasz?</FormHeader>
                        <FormRow>
                            <RowHeader>Rodzaj lokalu</RowHeader>
                            <ButtonRow>
                                {MAIN_OPTION_NAMES.map((option) => (
                                    <MainButtons
                                        onClick={(e) => handleSelectOption(e)}
                                        $isSelected={selectedOptions.includes(option)}
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </MainButtons>
                                ))}
                            </ButtonRow>
                        </FormRow>
                        <FormRow>
                            <RowHeader>
                                {loading ? 'Proszę czekać' : 'Twoje preferencje:'}
                            </RowHeader>
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
                    <SearchResultScreen response={response} />
                )}
            </FormContainer>
        </>
    );
}
