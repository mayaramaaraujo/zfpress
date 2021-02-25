import styled from 'styled-components'
import { dourado, marrom, salmao } from '../../constants/cores'

export const CasesCaixa = styled.div `
    text-align: start;
    height: 100%;
    
    //border: 1px solid red;
`

export const CaixaCasesTit = styled.div `
    margin: 60px 0px 20px 60px;
    width: 20%;
    height: 20%;
    text-align: start;
    border: 1px solid ${marrom};
`

export const TituloCases = styled.div `
    color: ${marrom};
    font-size: 2.5em;
    letter-spacing: 3px;
    padding: 15px;
    padding-left: 25px;
    font-weight: normal;
    height: 50px;
`

export const SubTitulo = styled.p `
    display: inline;
    background-color: ${marrom};
    color: ${salmao};
    letter-spacing: 4px;
    padding: 2px;
    margin: 0px;
    font-weight: bolder;
    box-sizing:border-box;
    position: absolute;
    left: 120px;
    padding: 10px 45px;
    margin: -20px;
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

    @media only screen and (max-width: 840px){
        flex-wrap: wrap;
        width: 100%;
    }
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
    @media only screen and (max-width:840px) {
        width: 100%;
    }
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