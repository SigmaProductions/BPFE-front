import React, { useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

import { GenericButton } from '../Generic/Buttons';
import CustomCarousel from './CustomCarousel';
import OPTIONS from '../../Consts/options';

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
    margin-top: 2rem;
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
    color: ${({ theme: { color }, isSelected }) =>
        isSelected ? color.white : color.secondaryBlue} !important;
    background-color: ${({ theme: { color }, isSelected }) =>
        isSelected ? color.secondaryBlue : color.white} !important;
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

export default function MainForm() {
    const [loading, setLoading] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    function handleSelectOption({ target }) {
        const { value: optionName } = target;
        if (selectedOptions.includes(optionName)) {
            setSelectedOptions((prevState) => prevState.filter((option) => option !== optionName));
            return;
        }
        setSelectedOptions((prevState) => [...prevState, optionName]);
    }

    const firstLetterUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <>
            <CustomCarousel />
            <FormContainer>
                <FormHeader>Czego szukasz?</FormHeader>
                <FormButtonsContainer>
                    {OPTIONS.map(({ name, values }) => (
                        <CustomAccordion key={name}>
                            <Accordion.Item>
                                <Accordion.Header>{firstLetterUpperCase(name)}</Accordion.Header>
                                <Accordion.Body>
                                    {values.map((arg) => (
                                        <FormButton
                                            onClick={(e) => handleSelectOption(e)}
                                            isSelected={selectedOptions.includes(arg)}
                                            key={arg}
                                            value={arg}
                                        >
                                            {firstLetterUpperCase(arg)}
                                        </FormButton>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </CustomAccordion>
                    ))}
                </FormButtonsContainer>
                <SearchButton>
                    {loading ? <Spinner animation="border" /> : 'JEDZIEMY!'}
                </SearchButton>
            </FormContainer>
        </>
    );
}
