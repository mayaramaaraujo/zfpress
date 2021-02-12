import styled from 'styled-components'
import { dourado } from '../../constants/cores'

export const CasesCaixa = styled.div `
    text-align: start;
    height: 100%;
    
    //border: 1px solid red;
`

export const CaixaCasesTit = styled.div `
    margin: 60px 0px 0px 60px;
    width: 25%;
    height: 20%;
    text-align: start;
`

export const TituloCases = styled.div `
    color: ${dourado};
    font-size: 2.5em;
    letter-spacing: 3px;
    padding-top: 15px;
    font-weight: lighter;
`

export const SubTitulo = styled.p `
    display: inline;
    background-color: ${dourado};
    color: white;
    letter-spacing: 3px;
    padding: 2px;
    margin: 0px;
    box-sizing:border-box;
`

export const ContainerCases = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid blue;
`

export const CaixaCases = styled.div `
    //border: 1px solid red;
    display: flex;
    width: 90%;
`

export const SetaDireitaImg = styled.img `
    padding: 5px;
    cursor: pointer;
    //border: 1px solid red;
`

export const SetaEsquerdaImg = styled.img `
    padding: 5px;
    cursor: pointer;
`

// case

export const TituloCase = styled.p `
    font-weight: bold;
    font-size: 1.1em;
`

export const CaseCaixa = styled.div `
    margin: 15px;
    width: 50%;
    box-sizing: border-box;
    //border: 1px solid red;
    height: auto;
`

export const CaixaImagensCase = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    object-fit: cover;
    display: flex;
    justify-content: space-between;
`

export const ImagemPrincipal = styled.img `
    //border: 1px solid red;
    object-fit: cover;
    width: 100%;
    height: 300px;
    padding: 15px 0px;
`

export const ImagemSecundaria = styled.img `    
    width: 30%;
    object-fit: cover;
    max-width: 300px;
    min-width: 100px;
`