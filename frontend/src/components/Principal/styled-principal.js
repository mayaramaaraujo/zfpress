import styled from 'styled-components'
import { cinzaClaro, cinzaTexto, dourado } from '../../constants/cores'

//PAIS

export const CaixaPrincipal = styled.div `
    //border: 1px solid red;
    box-sizing: border-box;
    margin: 0px 30px 0px 30px;
    min-height: 100vh;
    display: flex;
    //flex-wrap: wrap;
    padding: 2%;

    @media only screen and (max-width: 840px){
        flex-wrap: wrap;
        //border: 1px solid red;
        height: auto;
    }`

export const CaixaNoticiasPrincipais = styled.div `
    //border: 1px solid blue;
    box-sizing: border-box;
    width: 80%;

    @media only screen and (max-width: 840px){
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

`

export const CaixaNoticiasSecundarias = styled.div `
    //border: 1px solid blue;
    box-sizing: border-box;
    width: 20%;
    height: 100%;
    overflow: auto;
    padding: 0px 1% 0px 1%;

    @media only screen and (max-width: 840px){
        width: 100%;
        height: auto;
        margin: 10px 0px;
    }
`
 
//FILHOS

export const CaixaDestaques = styled.div `
    //border: 1px solid green;
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 840px){
        //border: 1px solid green;
        flex-wrap: wrap;
        height: 70vh;
    }

`

export const CaixaSubDestaques = styled.div `
    //border: 1px solid green;
    box-sizing: border-box;
    width: 100%;
    min-height: 40%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 840px){

    }
`

// noticias secundarias laterais

export const CaixaNoticiaSecudaria = styled.div `
    border-bottom: 4px solid ${dourado};
    padding: 0px 5px 0px 5px;
    box-sizing: border-box;
    width: 100%;
    height: 23%;
`

export const Paragrafo = styled.p `
    //border: 1px solid red;
    box-sizing: border-box;
    height: 8%;
    padding: 0px 0px 0px 5px;
    margin: 0px;
    text-align: start;
    font-weight: bolder;
    color: ${dourado};
    letter-spacing: 2px;
    font-size: 1.2em;
`

// NETOS

export const TituloNoticiasSec = styled.h4 `
    margin: 0px;
    padding: 10px 0px 10px 5px;
    text-align: start;
    vertical-align: center;    
`

export const ParagrafoNoticiaSec = styled.p `
    margin: 0px;
    padding: 0px 0px 0px 5px;
    text-align: start;
`


// subdestaques

export const CaixaNoticiaSubDestaque = styled.div `
    //border: 1px solid black;
    width: 49%;
    height: 100%;
    overflow:hidden;
    //margin: 0px 2% 0px 0%;
    box-sizing: border-box;
`

export const TituloSub = styled.h4 `
    margin: 0px;
    padding: 0px 0px 0px 5px;
    text-align: start;
    color: ${dourado};
`

export const ParagrafoSub = styled.p `
    margin: 0px;
    padding: 0px 0px 0px 5px;
    text-align: start;
    width: 60%;
    font-size: 0.9em;
`

// Destaque principal

export const CaixaDestaquePrincipal = styled.div `
    //border: 1px solid red;
    width: 73%;
    height: 96%;
    position: relative;
    min-width: 300px;

    @media only screen and (max-width: 840px){
        position: sticky;
        width: 100%;
        height: 35%;
    }

 
`

export const DescricaoDestaque = styled.p `
    margin: 0px 0px 0px 15px;
    padding: 0px;
    position: absolute;
    bottom: 10px;
    text-align: start;
    font-weight: bold;
    width: 80%;
    min-width: 300px;
    color: white;
    font-size: 1.1em;
    
    @media only screen and (max-width: 840px){
        bottom: -70px;
    }

    @media only screen and (min-width: 840px) {
        bottom: 40px;
    }
`

export const CaixaBolinhas = styled.div `
    position: absolute;
    bottom: 60px;
    width: 100%;
    //border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 840px){
        bottom: -100px;
    }

    @media only screen and (min-width: 840px) {
        bottom: 120px;
    } 

`

export const BolinhaBrancaEstilo = styled.div `
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: white;
    margin: 0px 10px 0px 0px;
    //cursor: pointer;
`

export const BolinhaCinzaEstilo = styled.div `
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${cinzaClaro};
    margin: 0px 10px 0px 0px;
    cursor: pointer;
`

export const Imagem = styled.img `
    width: 100%;
    height: 100%;
`

export const CaixaDestaqueSecundario = styled.div `
    //border: 1px solid red;
    width: 25%;
    height: 96%;
    box-sizing: border-box;
    max-height: 100%;

    @media only screen and (max-width: 840px){
        //border: 1px solid yellow;
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 15px;
    }
`

export const ImgSec = styled.img `
    width: 100%;
    max-width: 100%;
    overflow: hidden;

`

export const TituloSec = styled.h4 `
    margin: 0px;
    padding: 0px;
    font-weight: bold;
    color: ${dourado};
    text-align: start;
`

export const ParagrafoSec = styled.p `
    margin: 0px;
    padding: 0px;
    font-size: 0.9em;
    text-align: start;
`

export const CaixaImagemDestaque = styled.div `
    width: 100%;
    height: 330px;
    //border: 1px solid blue;
    background-image: url(${props => props.imagem});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (min-width: 840px) {
        height: 96%;
    }
`

export const CaixaImagemSubDestaque = styled.div `
    width: 500px;
    height: 150px;
    //border: 1px solid blue;
    background-image: url(${props => props.imagem});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const CaixaImagemDestaqueSecundario = styled.div `
    width: 100%;
    height: 80%;
    //border: 1px solid blue;
    background-image: url(${props => props.imagem});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`