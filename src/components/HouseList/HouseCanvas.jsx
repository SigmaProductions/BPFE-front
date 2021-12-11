/* eslint-disable no-unused-vars */
import React from 'react';
import { Offcanvas, OverlayTrigger, Popover } from 'react-bootstrap';
import styled from 'styled-components';

import { findSummary, firstLetterUpperCase } from '../../utils/utils';
import { GenericButton } from '../Generic/Buttons';

const CustomCanvas = styled(Offcanvas)`
    .offcanvas-title {
        font-size: ${({ theme: { fontSize } }) => fontSize.turbo};
    }
    .offcanvas-body {
        display: flex;
        flex-direction: column;
    }
`;

const CanvasHeader = styled.h3`
    margin-top: 2rem;
    text-align: center;
    color: ${({ theme: { color } }) => color.brown};
`;

const PerkItem = styled.div`
    display: flex;
    align-items: center;
    height: 5rem;
    font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
    border-bottom: 1px ${({ theme: { color } }) => color.brown} solid;
    :first-child {
        border-top: 1px ${({ theme: { color } }) => color.brown} solid;
    }
`;

const CanvasItem = styled.div`
    display: flex;
    align-items: center;
    height: 5rem;
    font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
    border-bottom: 1px ${({ theme: { color } }) => color.brown} solid;
    :first-child {
        border-top: 1px ${({ theme: { color } }) => color.brown} solid;
    }
`;

const CanvasValue = styled.p`
    font-size: inherit;
    color: ${({ theme: { color } }) => color.orange};
    margin-left: 0.5rem;
`;

const CustomPopover = styled(Popover)`
    .popover-header,
    .popover-body {
        font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
    }
`;

const CanvasButton = styled(GenericButton)`
    margin-top: auto;
    a {
        color: inherit;
    }
`;

export default function HouseCanvas({ house, showOffcanvas, setShowOffcanvas }) {
    const { name, features, perks, path } = house;

    const perksArray = Object.entries(perks)
        .filter(([key, value]) => value)
        .map(([key, value]) => key);

    const featuresArray = Object.entries(features);

    return (
        <CustomCanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <CanvasHeader>Rodzaj nieruchomości</CanvasHeader>
                {perksArray.map((perk) => (
                    <PerkItem key={perk}>{firstLetterUpperCase(perk)}</PerkItem>
                ))}
                <CanvasHeader>Cechy</CanvasHeader>
                {featuresArray.map(([name, value]) => (
                    <OverlayTrigger
                        key={name}
                        trigger="click"
                        placement="right"
                        overlay={
                            <CustomPopover>
                                <Popover.Header as="h3">{name}</Popover.Header>
                                <Popover.Body>{findSummary(name)}</Popover.Body>
                            </CustomPopover>
                        }
                    >
                        <CanvasItem>
                            {name}: <CanvasValue>{value}</CanvasValue>
                        </CanvasItem>
                    </OverlayTrigger>
                ))}
                <CanvasButton>
                    <a href={path}>Przejdź do strony nieruchomości</a>
                </CanvasButton>
            </Offcanvas.Body>
        </CustomCanvas>
    );
}
