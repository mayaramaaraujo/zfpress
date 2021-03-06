import React, {useState, useEffect} from 'react'
import { CaixaNoticiasSecundarias, Paragrafo } from '../styled-principal';
import NoticiaSecundaria from './NoticiaSecundaria/NoticiaSecundaria';
import {BaseUrlApi} from '../../../constants/linksUteis';
import axios from 'axios';

const MockNoticiaSecundaria = {
    titulo: "Lorem Ipsum",
    descricao: "Lorem ipsum dolor sit amet,consec tetuer adi piscingelit , sed diam"
}

function NoticiasSecundarias() {
        
    const [noticiasLaterais, setNoticiasLaterais] = useState([])

    const PegarDestaquesLaterais = async () => {
        try {
           const response = await axios.get(`${BaseUrlApi}/noticia/laterais`)
           setNoticiasLaterais(response.data)
           console.log(response.data)            
        } catch (error) {
            console.log(error)
        }        
    }

    useEffect(() => {
        PegarDestaquesLaterais()
    }, [])


    return (
        <CaixaNoticiasSecundarias>
            <Paragrafo>MAIS LIDAS</Paragrafo>

            {noticiasLaterais ? noticiasLaterais.map((notica) => {
                return (
                    <NoticiaSecundaria 
                        titulo={notica.titulo}
                        descricao={notica.texto}
                    />
                )
            }) : "Carregando..."}            

        </CaixaNoticiasSecundarias>
    )
}

export default NoticiasSecundarias;