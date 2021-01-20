import React from 'react'
import { DataAtualContainer } from '../../styled-cabecalho';

function DataAtual(props){
    return (
        <DataAtualContainer>
            <p> {props.cidade}, {props.diaSemana}, {props.dia} DE {props.mes} {props.ano}</p>
        </DataAtualContainer>
    )
}

export default DataAtual;