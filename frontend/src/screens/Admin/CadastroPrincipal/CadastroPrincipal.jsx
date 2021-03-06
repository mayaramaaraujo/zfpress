import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react' 
import { theme } from '../../../constants/cores';
import { CaixaCampo, Campos, CampoTexto, ContainerForm, Formulario, TituloForm } from '../admin-style';

function CadastroPrincipal() {
    const [arquivo, setArquivo] = useState("")
    const [url, setUrl] = useState("")

    const selecionarArquivo = (ev) => {
        console.log(ev.target.files)
        setArquivo(ev.target.files[0])
    }

    const convertFile = (ev) => {
        ev.preventDefault();

        const reader = new FileReader()

        reader.readAsDataURL(arquivo)

        reader.onload = () => {
            setUrl(reader.result)
            console.log(reader.result)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <ContainerForm>
                <TituloForm variant="h5" color="primary">ADICIONAR NOTICIAS</TituloForm>
            </ContainerForm>
            <Campos>
                <Formulario>
                    <CaixaCampo>
                        <CampoTexto label="Titulo" />
                    </CaixaCampo>
                    <CaixaCampo>
                        <CampoTexto label="Titulo" />
                    </CaixaCampo>
                    <CaixaCampo>
                        <form>
                            <input type="file" onChange={selecionarArquivo} style={{border: "none;"}}/>
                            <button onClick={convertFile}></button>                            
                        </form>
                        <img src={url}/>
                    </CaixaCampo>
                </Formulario>
            </Campos>
        </ThemeProvider>
    )
}

export default CadastroPrincipal;