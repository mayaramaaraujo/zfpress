import styled from 'styled-components'
import { cinzaClaro, cinzaTexto } from '../../constants/cores'
import SearchIcon from '@material-ui/icons/Search';


// cabecalho

export const ContainerCabecalho = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    //border: 1px solid black;
    box-sizing: border-box;
    height: auto;
    padding: 0px 15px 0px 15px;
`

export const LogoZfCaixa = styled.div `
    //border: 1px solid red;
    width: 35%;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    padding: 10px 0px 30px 70px;
`

// filho do cabecalho

export const CaixaBuscaContainer = styled.div `
    display:flex;
    align-items: flex-end;
    flex-direction: column;
    width: 65%;
    height: 150px;
    justify-content: space-evenly;
    //border: 1px solid blue;
    padding-right: 25px;
`

// netos cabecalho

export const FaleConoscoContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    //border: 1px solid red;
    width: 80%;
`

export const DataAtualContainer = styled.div `
    //border: 1px solid red;
    color: ${cinzaClaro};
`

export const Links = styled.div `
    text-decoration: none;
    cursor: pointer;
    color: ${cinzaTexto};
    font-weight: bold;
    font-size: 0.8em;
    margin: 0px 15px 0px 0px;
    
    :hover {
        border-bottom: 1px solid ${cinzaClaro}
    }
`

export const Inputs = styled.input `
    border: none;
    color: ${cinzaTexto};

    :focus {
        outline: 0;
    }

    ::placeholder {
        font-size: 0.8em;
        color: ${cinzaClaro};
        text-align: center;
    }
`

export const CaixaInputs = styled.div `
    display: flex;
    justify-content: center;
    border: 1.5px solid ${cinzaClaro};
    padding: 2px;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 0px 15px 0px 15px;
    
    :active {
        border: 2px solid ${cinzaClaro};
    }
`

export const Icones = styled.img `
    margin: 0px 0px 0px 15px;
    cursor: pointer;    
`
export const IconeDeBusca = styled(SearchIcon) `
    cursor: pointer;

    :hover {
        color: ${cinzaTexto};
    }
`



