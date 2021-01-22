import React from 'react'
import { CaixaImagemSubDestaque, CaixaNoticiaSubDestaque, ParagrafoSub, TituloSub } from '../../../styled-principal';

function NoticiaSubDestaque(props) {
    return (
        <CaixaNoticiaSubDestaque>
            <CaixaImagemSubDestaque imagem={props.imagem}/>
            <TituloSub>{props.titulo}</TituloSub>
            <ParagrafoSub>{props.descricao}</ParagrafoSub>
        </CaixaNoticiaSubDestaque>
    )
}

export default NoticiaSubDestaque;