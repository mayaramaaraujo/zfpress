import styled from 'styled-components' 
import { dourado } from '../../constants/cores'

export const CaixaClientes = styled.div `
    //border: 1px solid red;
    box-sizing: border-box;
`

export const CaixaTituloClientes = styled.div `
    //border: 1px solid red;
    margin: 60px 0px 0px 60px;
    width: 25%;
    height: 20%;
    text-align: start;
`

export const TituloClientes = styled.div `
    color: ${dourado};
    font-size: 2.5em;
    letter-spacing: 3px;
    padding-top: 15px;
    font-weight: lighter;
`

export const CoroaImgClientes = styled.img `
    width: auto;
`

export const CaixaClientesLogos = styled.div `
    //border: 1px solid red;
    width: 90%;
    margin: 0% 5%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0px 25px;
    justify-content: space-between;
    //padding: 20px;

    @media only screen and (max-width:640px) {
        justify-content: center;
    }
`

export const CaixaLogo = styled.div `
    width: 22.5%;
    min-width: 175px;
    display: flex;
    justify-content: center;
    //border: 1px solid red;
    box-sizing: border-box;
    //flex: 1;
`

export const Logo = styled.img `
    //border: 1px solid red;
    align-self: center;
    margin: 20px;
    padding: 10px;

    //height: auto;
`