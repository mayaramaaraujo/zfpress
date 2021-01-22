import React from 'react'
import { CaixaDestaquePrincipal, CaixaImagemDestaque, DescricaoDestaque} from '../../../styled-principal';

function DestaquePrincipal(props) {
    return (
        <CaixaDestaquePrincipal>
            <CaixaImagemDestaque imagem={props.imagem}/>
            <DescricaoDestaque>{props.descricao}</DescricaoDestaque>
        </CaixaDestaquePrincipal>
    )
}

export default DestaquePrincipal;