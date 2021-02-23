import React  from 'react'
import DataAtual from './DataAtual/DataAtual'
import FaleConosco from './FaleConosco/FaleConosco'
import {CaixaBuscaContainer} from '../styled-cabecalho'
import { dias, meses } from '../../../constants/arraysUteis'

function CaixaBusca(props) {
    const data = new Date()

    return (
        <CaixaBuscaContainer>
            <FaleConosco/>
            <DataAtual 
                diaSemana={dias[data.getDay()]} 
                dia={data.getDate()} 
                mes={meses[data.getMonth()]} 
                ano={data.getFullYear()} 
                cidade="CUIABÁ"
            />
        </CaixaBuscaContainer>
    )
}

export default CaixaBusca;