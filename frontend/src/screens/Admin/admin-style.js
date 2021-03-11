import { Input, Select, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { marrom, salmao } from '../../constants/cores'

export const ContainerPainel = styled.div `
    background-color: ${marrom};
    display: flex;
    justify-content: space-between;
    align-items:center;
    @media only screen and (max-width: 800px) {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const LogoZFpainel = styled.img `
    width: 100px;
    padding: 2%;
`

export const TituloPainel = styled.p `
    letter-spacing: 10px;
    color: ${salmao};
    padding: 2%;
`
export const TituloForm = styled(Typography) `
    //border: 1px solid red;
    text-align: start;
    padding: 1%;
`

export const ContainerForm = styled.div `
    display: flex;
    flex-direction: column;
`

export const Formulario = styled.form `
    border: 2px solid ${marrom};
    width: 50%;
    padding: 2%;
`

export const CampoTexto = styled(TextField) `
    width: 100%;
`

export const Campos = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
`

export const CaixaCampo = styled.div `
    text-align: start;
    margin: 10px;
`
export const InputSelecao = styled(Select) `
    width: 100%;
`

/* ------------------ */

export const ContainerForm2 = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.div `
    display: flex;
    flex-direction: column;
    width: 65%;
    text-align: start;
    border: 1px solid ${marrom};
    padding: 1%;
    border-radius: 10px;
    margin: 20px; 
`

export const CamposForm = styled.div `
    margin: 20px;
`

export const EditorInput = styled.div `
    min-height: 300px;
    max-height: 560px;
    overflow: scroll;
`

export const Inputs = styled(Input) `
    width: 100%;
`