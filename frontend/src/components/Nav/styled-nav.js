import styled from 'styled-components'
import { cinzaClaro, dourado, grafite, marrom, salmao } from '../../constants/cores'

export const NavCaixa = styled.div `
    //border: 1px solid ${cinzaClaro};
    //border-radius: 2px;
    //box-shadow: 0px 0px 5px ${cinzaClaro};
    //height: 7vh;
    //width: 100%;
    box-sizing: border-box;
    display: flex;
    //align-items: center;
    background-color: ${salmao};
    //border: 1px solid yellow;

    @media only screen and (max-width: 840px){
        //border: 1px solid red;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: auto;
        min-width: 300px; 
        margin: 0px 0px;     
        height: 100%;
    }
`

export const LinksNav = styled.a `
    //box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    color: ${marrom};
    font-weight: bold;
    padding: 10px 10px 10px 10px;
    font-size: 1.2em;
    //border: 1px solid red;
    flex-grow: 1;

    :hover {
        color: ${salmao};
        background-color: ${marrom};
        top: -13px;
    }
`

export const LinkCaixa = styled.div `
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    display: flex;
;
    //border: 1px solid red;
`

// imagem coroa

export const CoroaImg = styled.img `
    position: relative;
    top: -15px;
    float: top;
    display: ${props => props.aparecerCoroa}
`