import React from 'react'
import { FaleConoscoContainer, Links, Inputs, CaixaInputs, Icones, IconeDeBusca } from '../../styled-cabecalho';
import IconFacebook from '../../../../assets/facebook.png'
import IconInstagram from '../../../../assets/instagrampequeno.png'
import { Facebook, Instagram } from '../../../../constants/linksUteis';

function FaleConosco(){
    return (
        <FaleConoscoContainer>
            
            <Links href="">FALE CONOSCO</Links>
            <Links href="">EXPENDIENTE</Links>
            <CaixaInputs>
                <Inputs placeholder="PESQUISAR NO ZF PRESS"/>
                <IconeDeBusca />                    
            </CaixaInputs>
            <a href={Instagram}>
                <Icones src={IconInstagram} />
            </a>
            <a href={Facebook}>
                <Icones src={IconFacebook} />
            </a>

        </FaleConoscoContainer>
    )
}

export default FaleConosco;