import React from 'react'
import { CaixaNoticiaSecudaria, ParagrafoNoticiaSec, TituloNoticiasSec } from '../../styled-principal';

function NoticiaSecundaria(props) {
    return (
        <CaixaNoticiaSecudaria>
            <TituloNoticiasSec>{props.titulo.length > 25 ? props.titulo.substr(0,25) + "..." : props.titulo}</TituloNoticiasSec>
            <ParagrafoNoticiaSec>{props.descricao.length > 70 ? props.descricao.substr(0,70) + "..." : props.descricao}</ParagrafoNoticiaSec>
        </CaixaNoticiaSecudaria>
    )
}

export default NoticiaSecundaria;