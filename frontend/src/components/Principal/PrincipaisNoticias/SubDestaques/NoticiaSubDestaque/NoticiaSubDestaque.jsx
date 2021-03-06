import React from 'react'
import { CaixaImagemSubDestaque, CaixaNoticiaSubDestaque, ParagrafoSub, TituloSub } from '../../../styled-principal';

function NoticiaSubDestaque(props) {
    return (
        <CaixaNoticiaSubDestaque>
            <CaixaImagemSubDestaque imagem={props.imagem}/>
            <TituloSub>{props.titulo.length > 50 ? props.titulo.substr(0, 50) : props.titulo }</TituloSub>
            <ParagrafoSub>{props.descricao.length > 70 ? props.descricao.substr(0, 70) : props.descricao}</ParagrafoSub>
        </CaixaNoticiaSubDestaque>
    )
}

export default NoticiaSubDestaque;