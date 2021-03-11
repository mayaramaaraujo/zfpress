import React, { useEffect, useState } from 'react'
import { CaixaSubDestaques } from '../../styled-principal';
import NoticiaSubDestaque from './NoticiaSubDestaque/NoticiaSubDestaque';
import axios from 'axios';
import { BaseUrlApi } from '../../../../constants/linksUteis';

const mockSubDestaques = {
    imagem: "https://picsum.photos/1000/1500",
    titulo: "Lorem Ipsom",
    descricao: "Lorem ipsum dolor sit amet,consec tetuer adipi scing elit, sed diam"
}


function SubDestaques() {
    const [subDestaques, setSubDestaques] = useState([])

    const PegarSubDestaques = async () => {
        try {
           const response = await axios.get(`${BaseUrlApi}/noticia/secundarias`)
           setSubDestaques(response.data)
           console.log(response.data)            
        } catch (error) {
            console.log(error)
        }        
    }

    useEffect(() => {
        PegarSubDestaques()
    }, [])

    return (
        <CaixaSubDestaques>
            {subDestaques ? subDestaques.map((subDestaque, i) => {
                return (
                <NoticiaSubDestaque 
                    imagem={subDestaque.imagem}
                    titulo={subDestaque.titulo}
                    descricao={subDestaque.texto}
                    key={i}
                />)
            }): "carregando.."}

        </CaixaSubDestaques>
    )
}

export default SubDestaques;