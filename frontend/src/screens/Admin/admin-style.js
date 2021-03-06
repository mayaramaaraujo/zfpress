import { TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { marrom, salmao } from '../../constants/cores'

export const ContainerPainel = styled.div `
    background-color: ${marrom};
    display: flex;
    justify-content: space-between;
    align-items:center;
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
    border: 1px solid red;
    margin: 10px;
`

export const inputTipoFile = styled.input