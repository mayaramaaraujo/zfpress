import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react'
import LogoZf from '../../assets/logo-zf.png'
import { ContainerPainel, LogoZFpainel, TituloPainel } from './admin-style';
import {theme} from '../../constants/cores'

function CabecalhoAdmin() {

    return (
        <ThemeProvider theme={theme}>
            <ContainerPainel>
                <LogoZFpainel width="200px" src={LogoZf} alt="" srcset=""/>
                <TituloPainel>PAINEL DO ADMINISTRADOR</TituloPainel>
            </ContainerPainel>

        </ThemeProvider>
    )
}

export default CabecalhoAdmin;