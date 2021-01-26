import styled from 'styled-components'
import { cinzaClaro, cinzaTexto, dourado } from '../../constants/cores'

//PAIS

export const CaixaPrincipal = styled.div `
    //border: 1px solid red;
    box-sizing: border-box;
    margin: 0px 30px 0px 30px;
    height: 100vh;
    display: flex;
    padding: 2%;
`

export const CaixaNoticiasPrincipais = styled.div `
    //border: 1px solid blue;
    box-sizing: border-box;
    width: 80%;

`

export const CaixaNoticiasSecundarias = styled.div `
    //border: 1px solid blue;
    box-sizing: border-box;
    width: 20%;
    height: 100%;
    overflow: auto;
    padding: 0px 1% 0px 1%;
`
 
//FILHOS

export const CaixaDestaques = styled.div `
    //border: 1px solid green;
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
`

export const CaixaSubDestaques = styled.div `
    //border: 1px solid green;
    box-sizing: border-box;
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-between;
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
    min-width: 600px;
`

export const DescricaoDestaque = styled.p `
    margin: 0px 0px 0px 15px;
    padding: 0px;
    position: absolute;
    bottom: 10px;
    text-align: start;
    font-weight: bold;
    width: 80%;
    min-width: 600px;
    color: white;
    font-size: 1.1em;    
`

export const CaixaBolinhas = styled.div `
    position: absolute;
    bottom: 60px;
    width: 100%;
    //border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BolinhaBrancaEstilo = styled.div `
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: white;
    margin: 0px 10px 0px 0px;
    cursor: pointer;
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