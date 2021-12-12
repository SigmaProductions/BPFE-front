import React, { useState } from 'react';
import styled from 'styled-components';
import HouseList from '../HouseList/HouseList';
import houses from '../../mockups/houses.json';
import { GenericButton } from '../Generic/Buttons';
import Map from '../DisplayLocations/Map';
import HouseCanvas from '../HouseList/HouseCanvas';

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`;

function mapHouseObject(houses) {
    return Object.keys(houses).map((key) => ({
        name: houses[key].nazwa,
        address: houses[key].adres,
        price: houses[key].cena,
        img: houses[key].img,
        score: houses[key].score,
        perks: houses[key].perks,
        features: houses[key].features,
        path: houses[key].url,
    }));
}

const ResultHeader = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: ${({ theme: { color } }) => color.brown};
`;
const SwitchButtonsContainer = styled.div`
    display: flex;
    align-self: center;
    border-radius: 1.6rem;
    width: 30rem;
    height: 4rem;
    margin-bottom: 5rem;
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

export default function SearchResultScreen({ response }) {
    const [displayList, setDisplayList] = useState(true);
    const housesList = mapHouseObject(response);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [selectedHouse, setSelectedHouse] = useState(null);

    return (
        <ScreenContainer>
            {showOffcanvas && (
                <HouseCanvas
                    showOffcanvas={showOffcanvas}
                    setShowOffcanvas={setShowOffcanvas}
                    house={selectedHouse}
                ></HouseCanvas>
            )}
            <ResultHeader>Twoje najlepsze opcje:</ResultHeader>
            <SwitchButtonsContainer>
                <SwitchButton onClick={() => setDisplayList(true)} $isSelected={displayList}>
                    List
                </SwitchButton>
                <SwitchButton onClick={() => setDisplayList(false)} $isSelected={!displayList}>
                    Map
                </SwitchButton>
            </SwitchButtonsContainer>
            {displayList ? (
                <HouseList
                    showOffcanvas={showOffcanvas}
                    setShowOffcanvas={setShowOffcanvas}
                    selectedHouse={selectedHouse}
                    setSelectedHouse={setSelectedHouse}
                    houses={housesList}
                />
            ) : (
                <Map
                    houses={housesList}
                    setShowOffcanvas={setShowOffcanvas}
                    setSelectedHouse={setSelectedHouse}
                ></Map>
            )}
        </ScreenContainer>
    );
}
