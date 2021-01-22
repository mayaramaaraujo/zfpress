import React from 'react'
import { CaixaDestaquePrincipal, DescricaoDestaque, Imagem } from '../../../styled-principal';

function DestaquePrincipal(props) {
    return (
        <CaixaDestaquePrincipal>
            <Imagem src={props.imagem} />
            <DescricaoDestaque>{props.descricao}</DescricaoDestaque>
        </CaixaDestaquePrincipal>
    )
}

export default DestaquePrincipal;