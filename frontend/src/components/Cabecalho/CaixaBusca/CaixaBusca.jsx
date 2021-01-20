import { func } from 'prop-types'
import React from 'react'
import DataAtual from './DataAtual/DataAtual'
import FaleConosco from './FaleConosco/FaleConosco'
import {CaixaBuscaContainer} from '../styled-cabecalho'

function CaixaBusca() {
    return (
        <CaixaBuscaContainer>
            <FaleConosco />
            <DataAtual diaSemana="TERÇA-FEIRA" dia="19" mes="JANEIRO" ano="2021" cidade="CUIABÁ"/>
        </CaixaBuscaContainer>
    )
}

export default CaixaBusca;