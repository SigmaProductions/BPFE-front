import { css } from 'styled-components';

export const StyledLink = css`
    color: ${({ theme: { color } }) => color.black};
    text-decoration: none;

    :hover {
        text-decoration: underline;
        color: ${({ theme: { color } }) => color.primaryBlue};
    }
`;
