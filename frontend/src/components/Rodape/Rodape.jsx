import React from 'react'
import styled from 'styled-components'
import { cinzaClaro, cinzaMaisClaro, marrom, salmao } from '../../constants/cores'

const RodapeCaixa = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Endereco = styled.p `
    color: ${marrom};
`

const Telefone = styled.p `
    font-weight: bold;
    color: ${marrom};
    padding: 0px;
    padding-bottom: 15px;
    margin: 0px;
`

function Rodape() {
    return (
        <RodapeCaixa>
            <Endereco>Rua Presidente Castelo Branco, 571 - Quilombo - 78043-430 - Cuiabá-MT - imprensa@zfcomunicacao.com.br</Endereco>
            <Telefone>65 3046 5000 | 65 999910203</Telefone>
        </RodapeCaixa>       
    )
}

export default Rodape;