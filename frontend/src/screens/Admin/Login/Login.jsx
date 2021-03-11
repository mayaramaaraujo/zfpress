import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseUrlApi } from '../../../constants/linksUteis';
import { goToCadastroNoticias } from '../../../constants/goToPages';
import { useHistory } from 'react-router';
import { CaixaFormLogin, FormLogin, LabelLogin, LoginContainer, TituloLogin } from './login-style';
import { Button, TextField, ThemeProvider, Tooltip, Typography } from '@material-ui/core';
import { theme } from '../../../constants/cores';


function Login() {
    const [form, setForm] = useState({usuario: "", senha: ""})
    const history = useHistory()
    const [mensagemErro, setMensagemErro] = useState(false)

    const handleForm = (e) => {
        const {name, value} = e.target;

        setForm({...form, [name]: value})
    }

    const resetState = () => {
        setForm({...form, usuario: "", senha: ""});
    };

    const handleSubmittion = (event) => {
        event.preventDefault();

        const body = form

        axios.post(`${BaseUrlApi}/usuario/login`, body)
        .then(res => {
            window.localStorage.setItem("token", res.data.token)
            goToCadastroNoticias(history)
        })
        .catch(err => {
            console.log(err, "Usuário inválido")
            setMensagemErro(true)
        })
            
        
        console.log(form);
        resetState();
    };

    const token = window.localStorage.getItem("token")

    useEffect(() => {
        if(token) {
            goToCadastroNoticias(history)
        }
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <TituloLogin>
                <Typography variant="h5" color="primary">Seja bem vindo(a) ao seu painel, administrador(a)!</Typography>
            </TituloLogin>
            <LoginContainer>
                <CaixaFormLogin>
                    <FormLogin action="/usuario/login" method="post" onSubmit={handleSubmittion}>
                        <LabelLogin htmlFor="usuario">Usuário</LabelLogin>
                        <TextField 
                            id="usuario" 
                            type="text" 
                            value={form.usuario}
                            name="usuario"
                            onChange={handleForm}
                            variant="outlined"
                            size="small"
                            placeholder="Usuário"
                        />
                        <LabelLogin htmlFor="senha">Senha</LabelLogin>
                        <TextField 
                            id="senha" 
                            type="password" 
                            value={form.senha}
                            name="senha"
                            onChange={handleForm}
                            variant="outlined"
                            size="small"
                            placeholder="Senha"
                        />
                        <Button variant="contained" color="primary" onClick={handleSubmittion}>Entrar</Button>
                        {mensagemErro ? <Typography variant="subtitle2">Usuário ou senha inválidos.</Typography> : ""}
                    </FormLogin>
                </CaixaFormLogin>
            </LoginContainer>
        </ThemeProvider>

    )
}

export default Login;