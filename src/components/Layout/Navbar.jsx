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
    width: 10rem;
    min-width: 10rem;
    height: 100%;
`;

const NavList = styled.ul`
    display: flex;
    height: 100%;
    margin: 0;
    justify-content: center;
    margin-left: auto;

    li:first-child a {
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

const NavLink = styled.a`
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

export default function Navbar() {
    return (
        <NavbarContainer>
            <Logo src="https://scontent.fktw2-1.fna.fbcdn.net/v/t1.6435-9/150702882_4031311786902311_5371577199348878960_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pijgEkOUAWwAX_85304&_nc_ht=scontent.fktw2-1.fna&oh=00_AT--KpLYJq20x8hVtofW4uarZ32PqIqFOb1RI0pEXRbRIw&oe=61DA1D8C" />
            <Nav>
                <NavList>
                    <NavElement>
                        <NavLink>
                            <Link href="/">Home</Link>
                        </NavLink>
                    </NavElement>
                    <NavElement>
                        <NavLink>
                            <Link href="aboutUs">About us</Link>
                        </NavLink>
                    </NavElement>
                    <NavElement>
                        <NavLink>
                            <Link href="contact">Contact</Link>
                        </NavLink>
                    </NavElement>
                </NavList>
                <NavButton>Login</NavButton>
            </Nav>
        </NavbarContainer>
    );
}
