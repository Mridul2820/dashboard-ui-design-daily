import React from 'react'
import styled from 'styled-components'
import { Button } from '../GlobalStyles/GlobalStyles'

const Main = () => {
    return (
        <Container>
            <Heading>A modern way to <br/> build websites.</Heading>
            <Description>Empower designers to build professional, custom websites <br /> in a completely visual canvas with no code.</Description>
            <MainButton>Start Free Trial</MainButton>
        </Container>
    )
}

const Container = styled.div`
    background-color: rgba(211, 164, 163, .05);
    min-height: 75vh;
    border-top: .4px solid rgba(211, 164, 163, .4);
    border-bottom: .4px solid rgba(211, 164, 163, .4);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
`

const Heading = styled.h1`
    color: #2D353D;
    font-size: 60px;
    text-align: center;
    margin-bottom: 20px;
`

const Description = styled.div`
    margin-bottom: 30px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
`

const MainButton = styled(Button)`
    padding: 25px 30px;
    font-size: 16px;
`


export default Main
