import styled from 'styled-components'
import { marrom } from '../../../constants/cores'

export const TituloLogin = styled.div `
    margin: 20px;
`

export const LoginContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
  
`

export const CaixaFormLogin = styled.div `
    margin: 25px;
    border: 1px solid ${marrom};
    border-radius: 10px;
    padding: 10px;
    min-width: 30%;
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`

export const FormLogin = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;

`

export const LabelLogin = styled.label `
    width: 100%;
    text-align: start;
    color: ${marrom};
`