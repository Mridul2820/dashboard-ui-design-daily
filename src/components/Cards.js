import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

import data from '../cardData'

const Cards = () => {
    const [cardData] = useState(data())

    console.log(cardData);

    return (
        <div>
            <Description>
                <div className="line"></div>
                <p>We share our thoughts on design</p>
                <div className="line"></div>
            </Description>

            <CardWrap>
                {cardData.map(item => (
                    <Card 
                        key={item.id} 
                        item={item}
                    />
                ))}
            </CardWrap>
        </div>
    )
}

const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    p {
        color: #2D353D;
        margin: 0 10px;
    }

    .line {
        width: 200px;
        height: .5px;
        background-color: #2D353D;
    }
`

const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 100%;
    max-width: 1160px;
    padding: 20px;
    margin: 0 auto;
    padding-bottom: 50px;
`

export default Cards
