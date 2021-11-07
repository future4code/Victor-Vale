import React from 'react';
import './CardPequeno.css'
import {card1} from './styles'

function CardPequeno(props) {
    return (
        <div>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default CardPequeno;