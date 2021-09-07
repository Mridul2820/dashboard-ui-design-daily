import React from 'react'
import styled from 'styled-components'

const Card = ({ item }) => {
    return (
        <Wrap>
            <img src={item.cover} alt={item.title} />
            <h1>{item.title}</h1>
            <small>{item.date}</small>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 250px;

    img {
        width: 100%;
    }

    h1 {
        font-size: 20px;
        margin: 12px 0;
    }
`

export default Card
