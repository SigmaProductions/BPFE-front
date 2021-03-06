import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
    margin-top: 8rem;
    background: ${({ theme: { color } }) => color.secondaryBlue};
    height: 50rem;
    width: 100%;
    .carousel-indicators {
        height: auto;
    }
    div {
        height: 100%;
    }
    .carousel-caption {
        margin: auto;
        p {
            color: ${({ theme: { color } }) => color.white};
            font-size: ${({ theme: { fontSize } }) => fontSize.turbo};
            margin-top: 20%;
        }
    }
    a {
        position: absolute;
    }
    p {
        width: 100%;
        height: 100%;
    }
`;
export default function CustomCarousel() {
    return (
        <StyledCarousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <p>
                        Za pomocą bla bla systemów eksperyckich bla bla znajdziemy dla ciebie
                        zajebiste rozwiazanie.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <p>Pan Janusz skorzystal i teraz ma fajne auto</p>
                </Carousel.Caption>
            </Carousel.Item>
        </StyledCarousel>
    );
}
