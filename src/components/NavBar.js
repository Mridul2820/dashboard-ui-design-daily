import React from 'react'
import styled from 'styled-components'
import { Button } from '../GlobalStyles/GlobalStyles'

const NavBar = () => {
    return (
        <Container>
            <Logo>
                Logo
            </Logo>
            <Options>
                <li>Home</li>
                <li>Article</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </Options>
            <Buttons>
                <Button>Login</Button>
                <Button>Start Free Trial</Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    height: 80px;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.h1`
    font-size: 20px;
    color: #bbb;
    text-transform: uppercase;
`

const Options = styled.ul`
    list-style: none;
    display: flex;
    margin-left: 170px;

    li {
        margin: 0 20px;
        color: #2D353D;
        font-weight: 500;
    }
`

const Buttons = styled.div`
    display: flex;
`



export default NavBar
