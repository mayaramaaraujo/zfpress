import React from 'react'
import { CaixaDestaqueSecundario, CaixaImagemDestaqueSecundario, ImgSec, ParagrafoSec, TituloSec } from '../../../styled-principal';

function DestaqueSecundario(props) {
    return (
        <CaixaDestaqueSecundario>
            <CaixaImagemDestaqueSecundario imagem={props.imagem}/>
            <TituloSec>{props.titulo}</TituloSec>
            <ParagrafoSec>{props.descricao}</ParagrafoSec>
        </CaixaDestaqueSecundario>
    )
}

export default DestaqueSecundario;