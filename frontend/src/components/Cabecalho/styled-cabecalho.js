import styled from 'styled-components'
import { cinzaClaro, cinzaTexto } from '../../constants/cores'

// cabecalho

export const ContainerCabecalho = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    box-sizing: border-box;
    height: auto;
    padding: 0px 15px 0px 15px;
`

export const LogoZfCaixa = styled.div `
    border: 1px solid red;
    width: 40%;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    padding: 10px 0px 10px 70px;
`

// filho do cabecalho

export const CaixaBuscaContainer = styled.div `
    display:flex;
    align-items: flex-end;
    flex-direction: column;
    width: 60%;
    height: 150px;
    justify-content: space-evenly;
    border: 1px solid blue;
`

// netos cabecalho

export const FaleConoscoContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid red;
    width: 80%;
`

export const DataAtualContainer = styled.div `
    border: 1px solid red;
`

export const Links = styled.div `
    text-decoration: none;
    cursor: pointer;
    color: ${cinzaTexto};
    font-weight: bold;
    font-size: 0.8em;
`

export const Inputs = styled.input `
    border: none;
    color: ${cinzaTexto};    

    :focus {
        outline: 0;
    }

    ::placeholder {
        font-size: 0.8em;
        color: ${cinzaClaro};
        text-align: center;
    }
`

export const CaixaInputs = styled.div `
    display: flex;
    justify-content: center;
    border: 1.5px solid ${cinzaClaro};
    padding: 2px;
    border-radius: 10px;
    box-sizing: border-box;
    
`


