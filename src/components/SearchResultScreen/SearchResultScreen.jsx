import React, { useState } from 'react';
import styled from 'styled-components';
import HouseList from '../HouseList/HouseList';
import houses from '../../mockups/houses.json';
import { GenericButton } from '../Generic/Buttons';

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`;

function mapHouseObject(houses) {
    return Object.keys(houses).map((key) => ({
        name: houses[key].name,
        address: houses[key].adres,
        price: houses[key].cena,
        img: houses[key].url,
        score: houses[key].score,
        perks: {
            gastronomiczny: houses[key].gastronomiczny,
            handlowy: houses[key].handlowy,
            przemysłowy: houses[key].przemyslowy,
            biurowy: houses[key].biurowy,
        },
    }));
}

const ResultHeader = styled.h1`
    text-align: center;
    color: ${({ theme: { color } }) => color.brown};
`;
const SwitchButtonsContainer = styled.div`
    display: flex;
    align-self: center;
    border-radius: 1.6rem;
    width: 30rem;
    height: 4rem;
    background-color: ${({ theme: { color } }) => color.secondaryBlue};
`;

const SwitchButton = styled(GenericButton)`
    border-radius: 1.6rem;
    border: ${({ $isSelected }) => $isSelected && 'none'};
    width: 50%;
    background-color: ${({ theme: { color }, $isSelected }) =>
        $isSelected ? color.secondaryBlue : color.white};
    color: ${({ theme: { color }, $isSelected }) =>
        $isSelected ? color.white : color.secondaryBlue};
`;

export default function SearchResultScreen() {
    const [displayList, setDisplayList] = useState(true);
    const housesList = mapHouseObject(houses);

    console.log(houses);
    return (
        <ScreenContainer>
            <ResultHeader>Your best options:</ResultHeader>
            <SwitchButtonsContainer>
                <SwitchButton onClick={() => setDisplayList(true)} $isSelected={displayList}>
                    List
                </SwitchButton>
                <SwitchButton onClick={() => setDisplayList(false)} $isSelected={!displayList}>
                    Map
                </SwitchButton>
            </SwitchButtonsContainer>
            {displayList ? <HouseList houses={housesList} /> : <div></div>}
        </ScreenContainer>
    );
}
