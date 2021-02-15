import styled from 'styled-components'
import {cinzaMaisClaro, grafite } from '../../constants/cores'

export const CaixaQuemSomos = styled.div `
    min-height: 80vh;
    background-color: ${cinzaMaisClaro};
    display: flex;
    flex-direction: column;
`

export const CaixaTitulo = styled.div `
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: 40%;
    margin: 0px 0px 0px 50px;
    padding-top: 50px;

    @media only screen and (max-width: ){
        width: 75%;
    }
`

export const TituloQuemSomos1 = styled.h1 `
    width: 80%;
    background-color: ${grafite};
    color: white;
    padding: 5px;
    margin: 0px;
    font-size: 2.7em;
    text-align: center;
    font-weight: normal;
    letter-spacing: 4px;
`

export const TituloQuemSomos2 = styled.h1 `
    width: 90%;
    background-color: ${grafite};
    color: white;
    padding: 5px;
    margin: 10px 10px 10px 0px;
    font-size: 2.7em;
    text-align: center;
    font-weight: normal;
    letter-spacing: 4px;
`

export const ContainerTexto = styled.div `
    display: flex;
    justify-content: center;
`

export const CaixaParagrafo = styled.div `
    width: 95%;
    display: flex;
    flex-direction: column;
    //border: 1px solid red;
`

export const ParagrafoQuemSomos = styled.p `
    text-align: start;
    //border: 1px solid red;
    margin: 30px 30px 30px 30px;
    font-size: 1.1em;
`
