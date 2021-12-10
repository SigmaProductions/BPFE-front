import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const GenericButton = styled(Button)`
    color: ${({ theme: { color } }) => color.secondaryBlue};
    background-color: ${({ theme: { color } }) => color.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.large};
    transition: none;
`;
