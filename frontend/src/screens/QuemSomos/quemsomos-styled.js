import styled from 'styled-components'
import { grafite, marrom, salmao } from '../../constants/cores'

export const CaixaQuemSomos = styled.div `
    min-height: 80vh;
    background-color: ${salmao};
    display: flex;
    flex-direction: column;
`

export const CaixaTitulo = styled.div `
    display: flex;
    flex-direction: column;
    width: 45%;
    font-weight: bold;
    color: ${marrom};
    font-size: 2.5em;
    border: 1px solid ${marrom};
    min-width: 40%;
    padding: 20px;
    align-self: center;
    margin-top: 20px;

    @media only screen and (max-width: 840px ){
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
    align-self: center;
    width: 50%;

    @media only screen and (max-width: 840px){
        width: 100%;
    }



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
