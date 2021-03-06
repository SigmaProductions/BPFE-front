import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { GenericButton } from '../Generic/Buttons';
import { StyledLink } from '../Generic/Link';

const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 8rem;
    padding-top: 1rem;
    border-bottom: 1px ${({ theme: { color } }) => color.darkGrey} solid;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Logo = styled.img`
    width: 7rem;
    min-width: 7rem;
    height: 100%;
`;

const NavList = styled.ul`
    display: flex;
    height: 100%;
    margin: 0;
    justify-content: center;
    margin-left: auto;

    li:first-child > p {
        border-left: 0;
    }
`;

const NavElement = styled.li`
    ${StyledLink};
    display: flex;
    align-items: center;
    height: auto;
    width: auto;
    padding: 1rem 0 1rem 1rem;
`;

const NavLink = styled.p`
    display: flex;
    align-items: center;
    border-left: 1rem;
    ${StyledLink};
    height: 3.5rem;
    font-size: ${({ theme: { fontSize } }) => fontSize.medium};
    text-align: center;
    margin-right: 2rem;
    padding-left: 1.5rem;
    border-left: 1px ${({ theme: { color } }) => color.darkGrey} solid;
`;

const NavButton = styled(GenericButton)`
    width: 20rem;
    height: 4rem;
`;

const LogoDescription = styled.h2`
    width: 20rem;
    display: flex;
    align-items: center;
    font-style: italic;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
`;

const LogoContainer = styled.div`
    display: flex;
    width: auto;
    cursor: pointer;
`;

export default function Navbar() {
    return (
        <NavbarContainer>
            <Link href="/">
                <LogoContainer>
                    <Logo src="logo.svg" />
                    <LogoDescription>Sigma Productions</LogoDescription>
                </LogoContainer>
            </Link>
            <Nav>
                <NavList>
                    <NavElement>
                        <NavLink>
                            <Link href="/">Home</Link>
                        </NavLink>
                    </NavElement>
                    <NavElement>
                        <NavLink>
                            <Link href="/charts">Demo</Link>
                        </NavLink>
                    </NavElement>
                    <NavElement>
                        <NavLink>
                            <Link href="/klient_indywidualny">Klient indywidualny</Link>
                        </NavLink>
                    </NavElement>
                    <NavElement>
                        <NavLink>
                            <Link href="/flow">Stw??rz system</Link>
                        </NavLink>
                    </NavElement>
                </NavList>
            </Nav>
        </NavbarContainer>
    );
}
