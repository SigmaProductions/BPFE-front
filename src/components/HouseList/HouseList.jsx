import React, { useState } from 'react';
import styled from 'styled-components';
import { GenericButton } from '../Generic/Buttons';
import HouseModal from './HouseModal';

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    padding: 5rem 10rem 10rem 10rem;
    margin: 0;
    text-decortion: none;
    list-style: none;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30rem;
    background-color: ${({ theme: { color } }) => color.skyBlue};
    border: 1px ${({ theme: { color } }) => color.secondaryBlue} solid;
    margin-bottom: 5rem;
    padding: 2rem;
`;

const ItemImage = styled.img`
    width: 20rem;
    min-width: 20rem;
    height: 20rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5rem;
`;

const ItemDescriptionBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const ItemName = styled.h3`
    font-size: ${({ theme: { fontSize } }) => fontSize.turbo};
    color: ${({ theme: { color } }) => color.brown};
`;

const ItemInfoRow = styled.div`
    height: 100%;
    display: flex;
`;
const ItemGeneralColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: auto;
    margin-right: 5rem;
`;

const ItemGeneralRow = styled.div`
    display: flex;
`;

const ItemGeneralKey = styled.p`
    font-size: ${({ theme: { fontSize } }) => fontSize.large};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-right: 1rem;
`;

const ItemGeneralValue = styled.p`
    color: ${({ theme: { color } }) => color.brown};
    font-size: ${({ theme: { fontSize } }) => fontSize.large};
`;
const ItemPerksList = styled.ul`
    display: flex;
    padding: 0;
    flex-direction: column;
    height: 100%;
`;

const ItemPerk = styled.li`
    margin-left: 2rem;
    color: ${({ theme: { color } }) => color.brown};
    font-size: ${({ theme: { fontSize } }) => fontSize.large};
`;

export default function HouseList({ houses }) {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [selectedHouse, setSelectedHouse] = useState(null);

    const result = houses;
    console.log(result);

    return (
        <ListContainer>
            {showOffcanvas && (
                <HouseModal
                    showOffcanvas={showOffcanvas}
                    setShowOffcanvas={setShowOffcanvas}
                    house={selectedHouse}
                ></HouseModal>
            )}
            {result.map((house) => (
                <ListItem key={house.name}>
                    <ItemImage src={house.img} />
                    <ItemDescriptionBox>
                        <ItemName>{house.name}</ItemName>
                        <ItemInfoRow>
                            <ItemGeneralColumn>
                                <ItemGeneralRow>
                                    <ItemGeneralKey>Address:</ItemGeneralKey>
                                    <ItemGeneralValue>{house.address}</ItemGeneralValue>
                                </ItemGeneralRow>
                                <ItemGeneralRow>
                                    <ItemGeneralKey>Price:</ItemGeneralKey>
                                    <ItemGeneralValue>{house.price}</ItemGeneralValue>
                                </ItemGeneralRow>
                                <ItemGeneralRow>
                                    <ItemGeneralKey>Score:</ItemGeneralKey>
                                    <ItemGeneralValue>{house.score}</ItemGeneralValue>
                                </ItemGeneralRow>
                            </ItemGeneralColumn>
                            <ItemPerksList>
                                <h3>Przeznaczenie:</h3>
                                {house.perks.biurowy && <ItemPerk>Biurowy</ItemPerk>}
                                {house.perks.gastronomiczny && <ItemPerk>Gastronomiczny</ItemPerk>}
                                {house.perks.handlowy && <ItemPerk>Handlowy</ItemPerk>}
                                {house.perks['przemysłowy'] && <ItemPerk>Przemysłowy</ItemPerk>}
                            </ItemPerksList>
                        </ItemInfoRow>
                        <GenericButton
                            onClick={() => {
                                setSelectedHouse(house);
                                setShowOffcanvas(true);
                            }}
                        >
                            Więcej informacji
                        </GenericButton>
                    </ItemDescriptionBox>
                </ListItem>
            ))}
        </ListContainer>
    );
}
