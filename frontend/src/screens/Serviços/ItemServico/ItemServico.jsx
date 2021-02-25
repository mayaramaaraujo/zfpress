import React from 'react'
import { Item, TitItem } from '../styled-servicos';

function ItemServico(props) {
    return (
        <Item fundo={props.fundo} texto={props.texto}>
            <TitItem onClick={() => props.setIndex(props.index)}>{props.servico}</TitItem>
        </Item>
    )
}

export default ItemServico;