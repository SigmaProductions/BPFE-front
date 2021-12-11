import React, { useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

import { GenericButton } from '../Generic/Buttons';
import CustomCarousel from './CustomCarousel';

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
    margin-bottom: 1rem;
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

    const body = {
        gastronomiczny: false,
        handlowy: false,
        usługowy: false,
        biurowy: true,
        przemyslowy: false,
    };
    axios.post('http://localhost:5000/', body).then((res) => console.log(res.data));
    return (
        <>
            <CustomCarousel />
            <FormContainer>
                <FormHeader>Czego szukasz?</FormHeader>
                <FormButtonsContainer>
                    <CustomAccordion>
                        <Accordion.Item>
                            <Accordion.Header>Rodzaj lokalu</Accordion.Header>
                            <Accordion.Body>
                                <FormButton>Mieszkanie</FormButton>
                                <FormButton>Usługa</FormButton>
                                <FormButton>Handel</FormButton>
                                <FormButton>Wynajem</FormButton>
                            </Accordion.Body>
                        </Accordion.Item>
                    </CustomAccordion>
                    <CustomAccordion>
                        <Accordion.Item>
                            <Accordion.Header>Warunki zamieszkania</Accordion.Header>
                            <Accordion.Body>
                                <FormButton>Jakość powietrza</FormButton>
                                <FormButton>Bliska stacja pociągowa</FormButton>
                                <FormButton>Liczne hotspoty</FormButton>
                            </Accordion.Body>
                        </Accordion.Item>
                    </CustomAccordion>
                    <CustomAccordion>
                        <Accordion.Item>
                            <Accordion.Header>Punkty zainteresowań</Accordion.Header>
                            <Accordion.Body>
                                <FormButton>Restauracje</FormButton>
                                <FormButton>Bankomaty</FormButton>
                                <FormButton>Transport</FormButton>
                                <FormButton>Edukacja</FormButton>
                                <FormButton>Kultura</FormButton>
                            </Accordion.Body>
                        </Accordion.Item>
                    </CustomAccordion>
                    <CustomAccordion>
                        <Accordion.Item>
                            <Accordion.Header>Infrastruktura</Accordion.Header>
                            <Accordion.Body>
                                <FormButton>Parki</FormButton>
                                <FormButton>Obiekty kulutry</FormButton>
                                <FormButton>Obiekty sportowe</FormButton>
                                <FormButton>Zabudowa mieszkaniowa</FormButton>
                                <FormButton>Domy wolnostojące</FormButton>
                                <FormButton>Gospodarstwa rolne</FormButton>
                            </Accordion.Body>
                        </Accordion.Item>
                    </CustomAccordion>
                </FormButtonsContainer>
                <SearchButton>
                    {loading ? <Spinner animation="border" /> : 'JEDZIEMY!'}
                </SearchButton>
            </FormContainer>
        </>
    );
}
