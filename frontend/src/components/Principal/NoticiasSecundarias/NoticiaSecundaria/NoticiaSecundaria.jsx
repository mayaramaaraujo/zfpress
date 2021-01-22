import React from 'react'
import { CaixaNoticiaSecudaria, ParagrafoNoticiaSec, TituloNoticiasSec } from '../../styled-principal';

function NoticiaSecundaria(props) {
    return (
        <CaixaNoticiaSecudaria>
            <TituloNoticiasSec>{props.titulo}</TituloNoticiasSec>
            <ParagrafoNoticiaSec>{props.descricao}</ParagrafoNoticiaSec>
        </CaixaNoticiaSecudaria>
    )
}

export default NoticiaSecundaria;