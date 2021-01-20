import React from 'react'
import { FaleConoscoContainer, Links, Inputs, CaixaInputs } from '../../styled-cabecalho';
import IconFacebook from '../../../../assets/facebook.png'
import IconInstagram from '../../../../assets/instagrampequeno.png'
import SearchIcon from '@material-ui/icons/Search';


function FaleConosco(){
    return (
        <FaleConoscoContainer>
            
            <Links href="">FALE CONOSCO</Links>
            <Links href="">EXPENDIENTE</Links>
            <CaixaInputs>
                <Inputs placeholder="PESQUISAR NO ZF PRESS"/>
                <SearchIcon />
            </CaixaInputs>
            <img src={IconInstagram} />
            <img src={IconFacebook} />

        </FaleConoscoContainer>
    )
}

export default FaleConosco;