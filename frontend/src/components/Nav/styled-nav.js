import styled from 'styled-components'
import { cinzaClaro, dourado, grafite } from '../../constants/cores'

export const NavCaixa = styled.div `
    //border: 1px solid ${cinzaClaro};
    border-radius: 2px;
    box-shadow: 0px 0px 5px ${cinzaClaro};
    height: 7vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px 30px 0px 30px;

    @media only screen and (max-width: 840px){
        //border: 1px solid red;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: auto;
        min-width: 300px; 
        margin: 15px 0px;     
    }
`

export const LinksNav = styled.a `
    display: block;
    //border: 1px solid blue;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    color: ${dourado};
    font-weight: bold;
    padding: 0px 10px 0px 10px;
    position: relative;
    top: 0px;
    font-size: 1.2em;

    :hover {
        color: white;
        background-color: ${dourado};
        top: -13px;
    }
`

// imagem coroa

export const CoroaImg = styled.img `
    position: relative;
    top: -15px;
    float: top;
    display: ${props => props.aparecerCoroa}
`