import styled from 'styled-components'
import { dourado, grafite, marrom, salmao } from '../../constants/cores'

export const CaixaServicos = styled.div `
    background-color: ${marrom};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width:840px) {
        flex-wrap: wrap;
    }
`

export const CaixaDescricaoServicos = styled.div `
    width: 65%;
    height: 100%;
    background-color: ${salmao};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 840px) {
        width: 100%;
    }
`

export const ListaServicos = styled.div `
    width: 30%;
    height: 95%;
    background-color: ${marrom};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 840px) {
        width: 100%;
    }
`

export const SetaPraCima = styled.img `
    height: auto;
    padding: 5px;
    //border: 1px solid red;

    :hover {
        opacity: 0.8;
        cursor: pointer;
    }
`

export const SetaPraBaixo = styled.img `
    height: auto;
    padding: 5px;
    //border: 1px solid red;

    :hover {
        opacity: 0.8;
        cursor: pointer;
    }
`

export const Descricao = styled.div `
    height: 100%;
    width: 100%;    
    //border: 1px solid red;
    text-align: start;
    box-sizing: border-box;
    padding: 0px 35px;  
`

export const TitDescricao = styled.h1 `
    color: ${marrom};
    width: 35%;
    font-size: 2.3em;
`

export const ParagDescricao = styled.div `
    line-height: 30px;
    letter-spacing: 2px;
    padding: 10px 0px;
    font-size: 0.9em;
`

export const ServicosLista = styled.li `
    padding: 2px 20px;
    box-sizing: border-box;
    letter-spacing: 2px;
    font-size: 0.9em;
`

export const ContainerNomeServicos = styled.div `
    //border: 1px solid white;
    width: 93%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Item = styled.div `
    height: 12%;
    background-color: ${props => props.fundo};
    color: ${props => props.texto};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0px;
    padding-left: 5px;
`

export const TitItem = styled.h3 `
    padding-left: 20px;
    cursor: pointer;    
`