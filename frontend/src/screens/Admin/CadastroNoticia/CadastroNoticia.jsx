import React, { useState } from 'react'
import axios from 'axios'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../../constants/cores'
import { CamposForm, ContainerForm2, EditorInput, Form, Inputs } from '../admin-style'
import { BaseUrlApi } from '../../../constants/linksUteis'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Input, FormLabel, Typography, Button, Select, MenuItem, InputLabel } from '@material-ui/core'

function CadastroNoticia() {
    const [titulo, setTitulo] = useState()
    const [texto, setTexto] = useState()
    const [tipo, setTipo] = useState("PRINCPAL")
    const [imagem, setImagem] = useState()
    const reader = new FileReader();

    const ConverterArquivoParaUrl = () => {
        if(imagem) {
            reader.readAsDataURL(imagem);

            reader.onload = () => {
                setImagem(reader.result)
            }
        } else {
            setImagem("");
        }
    }

    const token = window.localStorage.getItem("token")

    const adicionarNoticia = () => {
        const body = {
            titulo: titulo,
            texto: texto,
            imagem: imagem,
            tipo: tipo
        }

        console.log(body)
        axios.post(`${BaseUrlApi}/noticia/cadastro`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    return (
        <ThemeProvider theme={theme}>
            <ContainerForm2>
                <Form>
                    <Typography variant="h5" color="primary">Adicionar notícias</Typography>
                    <CamposForm>

                        <InputLabel color="primary">Título</InputLabel>
                        <Input
                            fullWidth
                            placeholder="Título" 
                            id="titulo" 
                            type="text" 
                            onChange={(e) => setTitulo(e.target.value)}
                        />

                    </CamposForm>
                    <CamposForm>
                        <InputLabel>Notícia</InputLabel>
                    </CamposForm>
                    <EditorInput>
                        
                        <CKEditor
                            name="myEditor"
                            editor={ ClassicEditor }
                            data="Digite..."
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                                setTexto(data)
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                            config={ {
                                toolbar: [ 'bold', 'italic', 'heading', 'link', 'numberedList' ]
                            } }
                            style={{
                                'height': '300px;'
                            }}
                            
                        />  
                    </EditorInput>
                    <CamposForm>

                        <InputLabel>Selecione uma imagem</InputLabel>
                        <Input 
                            id="imagem"
                            type="file"
                            onChange={(e) => setImagem(e.target.files[0])}
                        />
                        <Button variant="contained" color="primary" onClick={ConverterArquivoParaUrl}>Adicionar imagem</Button>
                    </CamposForm>
                    <CamposForm>

                        <Select name="tipo" value="Selecione uma notícia" onChange={(e) => setTipo(e.target.value)} placeholder="Selecione o tipo da notícia">
                            <MenuItem value="Selecione uma notícia">Selecione uma notícia</MenuItem>
                            <MenuItem value="PRINCIPAL">Principal</MenuItem>
                            <MenuItem value="LATERAL">Lateral</MenuItem>
                            <MenuItem value="SECUNDARIA">Secundaria</MenuItem>
                        </Select>

                    </CamposForm>

                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="button" 
                        onClick={adicionarNoticia}
                    >Salvar</Button>
                </Form>            
            </ContainerForm2>
        </ThemeProvider>
    )
}

export default CadastroNoticia;