import React from 'react'
import LogoZF from '../../assets/logo-zf.png'
import { ContainerCabecalho, LogoZfCaixa } from './styled-cabecalho'
import CaixaBusca from './CaixaBusca/CaixaBusca'

function Cabecalho(props){
    return (
        <ContainerCabecalho>
            <LogoZfCaixa>
                <img width="180px" src={LogoZF} />
            </LogoZfCaixa>
            <CaixaBusca/>
        </ContainerCabecalho>
    )
}

export default Cabecalho;