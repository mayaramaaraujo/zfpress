import React from 'react'
import { CaixaNoticiaSubDestaque, ParagrafoSub, TituloSub } from '../../../styled-principal';

function NoticiaSubDestaque(props) {
    return (
        <CaixaNoticiaSubDestaque>
            <img src={props.imagem}/>
            <TituloSub>{props.titulo}</TituloSub>
            <ParagrafoSub>{props.descricao}</ParagrafoSub>
        </CaixaNoticiaSubDestaque>
    )
}

export default NoticiaSubDestaque;