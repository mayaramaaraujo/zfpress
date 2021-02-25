import styled from 'styled-components'
import { grafite, marrom } from '../../constants/cores'

export const CaixaNossaEstrutura = styled.div `
    //height: 130vh;
    min-height: 130vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px;
    flex-wrap: wrap;

    @media only screen and (max-width: 840px){
    }
`

export const CaixaTexto = styled.div `
    display: flex;
    flex-direction: column;
    //border: 1px solid red;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    justify-content: space-evenly;
    text-align: start;
    //margin: 60px;

    @media only screen and (max-width: 840px) {
        width: 100%;
    }

    
`

export const CaixaTitulo = styled.div `
    //border: 1px solid black;
    //margin: 60px;
    font-weight: bolder;
    font-size: 1.3em;
`
export const TituloNossaEstrutura = styled.p `
    padding: 10px 0px 10px 0px;
    margin: 0px;
    //border: 1px solid red;
    color: ${marrom};
    width: 35%;
    letter-spacing: 3px;
    font-size: 2.5em;
    @media only screen and (max-width: 840px){
        width: 100%;
        //border: 1px solid red;
    }

`

export const TextoNossaEstrutura = styled.p `
    //border: 1px solid blue;
    letter-spacing: 3px;
    width: 65%;
    font-size: 1.1em;
    line-height: 35px;

    @media only screen and (max-width: 840px){
        width: 100%;
    }
`

export const Coroa = styled.img `
    //border: 1px solid red;
`

export const CaixaImagens = styled.div `
    //border: 1px solid red;
    width: 50%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 840px ) {
        height: 130vh;
        width: 100%;
    }
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