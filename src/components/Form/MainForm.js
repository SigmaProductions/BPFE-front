import React from 'react';
import styled from 'styled-components';

import CustomCarousel from './CustomCarousel';

const FormContainer = styled.div`
    margin-top: 6rem;
    display: flex;
    height: 50rem;
    align-items: center;
    flex-direction: column;
    border: 1px black solid;
    margin-bottom: 2rem;
`;

const FormHeader = styled.h1`
    margin-top: 2rem;
    color: ${({ theme: { color } }) => color.black};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.thin};
`;

export default function MainForm() {
    return (
        <>
            <CustomCarousel />
            <FormContainer>
                <FormHeader>Czego szukasz?</FormHeader>
            </FormContainer>
        </>
    );
}
