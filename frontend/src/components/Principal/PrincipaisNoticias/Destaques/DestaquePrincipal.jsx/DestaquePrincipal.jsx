import React from 'react'
import { BolinhaBranca, CaixaBolinha, CaixaDestaquePrincipal, CaixaImagemDestaque, DescricaoDestaque} from '../../../styled-principal';
import BolinhaCinza from './Bolinhas/BolinhaCinza';

function DestaquePrincipal(props) {
    return (
        <CaixaDestaquePrincipal>
            <CaixaImagemDestaque imagem={props.imagem}/>
            <DescricaoDestaque>{props.descricao}</DescricaoDestaque>
            <CaixaBolinha>
                
            </CaixaBolinha>   

        </CaixaDestaquePrincipal>
    )
}

export default DestaquePrincipal;