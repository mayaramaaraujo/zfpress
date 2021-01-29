import styled from 'styled-components'
import { grafite } from '../../constants/cores'
import { Typography } from '@material-ui/core';

export const CaixaNossaEstrutura = styled.div `
    height: 100vh;
    display: flex;
    margin: 60px;
`

export const CaixaTexto = styled.div `
    //border: 1px solid red;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    align-items: flex-start;
    text-align: start;
    //margin: 60px;
`

export const CaixaTitulo = styled.div `
    //border: 1px solid black;
    //margin: 60px;
    font-weight: lighter;
`
export const TituloNossaEstrutura = styled(Typography) `
    padding: 10px 0px 10px 0px;
    margin: 0px;
    //border: 1px solid red;
    color: ${grafite};
    width: 35%;
    letter-spacing: 3px;
`
export const TextoNossaEstrutura = styled.p `
    //border: 1px solid blue;
    letter-spacing: 3px;
    width: 60%;
    font-size: 1.2em;
    line-height: 35px;
`

export const Coroa = styled.img `
    //border: 1px solid red;
`

export const CaixaImagens = styled.div `
    //border: 1px solid red;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Img1 = styled.div `
    height: 37%;
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //border: 1px solid red;
`

export const Img2 = styled.div `
    height: 30%;
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //border: 1px solid red;
`

export const Img3 = styled.div `
    height: 30%;
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //border: 1px solid red;
`