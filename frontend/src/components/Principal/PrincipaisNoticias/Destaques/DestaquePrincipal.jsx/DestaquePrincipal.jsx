import React, { useState } from 'react'
import { CaixaBolinhas, CaixaDestaquePrincipal, CaixaImagemDestaque, DescricaoDestaque} from '../../../styled-principal';
import BolinhaBranca from './Bolinhas/BolinhaBranca';
import BolinhaCinza from './Bolinhas/BolinhaCinza';

function DestaquePrincipal(props) {

    return (
        <CaixaDestaquePrincipal>
            <CaixaImagemDestaque imagem={props.imagem}/>
            <DescricaoDestaque>{props.descricao}</DescricaoDestaque>
            <CaixaBolinhas>

                {(props.index === 0) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 1) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 2) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 3) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 4) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 5) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 6) ?  <BolinhaCinza /> : <BolinhaBranca />}
                
            </CaixaBolinhas>
        </CaixaDestaquePrincipal>
    )
}

export default DestaquePrincipal;