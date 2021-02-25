import React from 'react'
import { FaleConoscoContainer, Links, Inputs, CaixaInputs, Icones, IconeDeBusca } from '../../styled-cabecalho';
import { Facebook, Instagram } from '../../../../constants/linksUteis';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

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
                <Icones>
                    <InstagramIcon />
                </Icones>
            </a>
            <a href={Facebook}>
                <Icones>
                    <FacebookIcon />
                </Icones>
            </a>

        </FaleConoscoContainer>
    )
}

export default FaleConosco;