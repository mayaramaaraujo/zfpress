import React from 'react'
import { FaleConoscoContainer, Links, Inputs, CaixaInputs, Icones, IconeDeBusca } from '../../styled-cabecalho';
import { Facebook, Instagram } from '../../../../constants/linksUteis';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { goBusca, goContato, goExpediente } from '../../../../constants/goToPages';
import { useHistory } from 'react-router';

function FaleConosco(){
    const history = useHistory()
    return (
        <FaleConoscoContainer>
            
            <Links onClick={() => goContato(history)}>FALE CONOSCO</Links>
            <Links onClick={() => goExpediente(history)}>EXPENDIENTE</Links>
            <CaixaInputs>
                <Inputs placeholder="PESQUISAR NO ZF PRESS"/>
                <IconeDeBusca onClick={() => goBusca(history)}/>                    
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