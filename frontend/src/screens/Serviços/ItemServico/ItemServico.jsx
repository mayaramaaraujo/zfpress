import React from 'react'
import { Item, TitItem } from '../styled-servicos';
import Coroa from '../../../assets/coroapreta.png'

function ItemServico(props) {
    return (
        <Item fundo={props.fundo} texto={props.texto}>
            <img src={Coroa} />
            <TitItem>{props.servico}</TitItem>
        </Item>
    )
}

export default ItemServico;