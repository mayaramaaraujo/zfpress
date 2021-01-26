import React, { useEffect, useState } from 'react'
import { branco, cinzaClaro } from '../../../../constants/cores';
import { CaixaDestaques } from '../../styled-principal';
import DestaquePrincipal from './DestaquePrincipal.jsx/DestaquePrincipal';
import DestaqueSecundario from './DestaqueSecundario/DestaqueSecundario';

const mockDestaques = [
    {   
        imagem: "https://picsum.photos/500/430",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    },
    {   
        imagem: "https://picsum.photos/500/431",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    },
    {   
        imagem: "https://picsum.photos/500/433",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    },
    {   
        imagem: "https://picsum.photos/500/434",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    },
    {   
        imagem: "https://picsum.photos/500/431",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    },
    {   
        imagem: "https://picsum.photos/500/433",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    },
    {   
        imagem: "https://picsum.photos/500/434",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    }
]

const mockSecundario = {
    titulo: "Lorem ipsum",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "https://picsum.photos/300/320"
}

function Destaques() {
    const [tamanho, setTamanho] = useState(mockDestaques.length - 1)
    const [imagemIndex, setImagemIndex] = useState(0)

    const ProximaImagem = () => {
        if(imagemIndex === tamanho){
            setTimeout(() => {
                setImagemIndex(0)
            }, 2000)
        } else {
            setTimeout(() => {
                setImagemIndex(imagemIndex + 1)
            }, 2000)
        }
    }

    useEffect(() => {
        const intervaloId = setInterval(() => {
            ProximaImagem()
        }, 5000)

        return () => clearInterval(intervaloId)
    },[imagemIndex])


    return (
        <CaixaDestaques>
            <DestaquePrincipal
                imagem={mockDestaques[imagemIndex].imagem}
                descricao={mockDestaques[imagemIndex].descricao}
                index={imagemIndex}
                mudarIndex={setImagemIndex}
                array={mockDestaques}
            />

            <DestaqueSecundario 
                titulo={mockSecundario.titulo}
                imagem={mockSecundario.imagem}
                descricao={mockSecundario.descricao}
            />
        </CaixaDestaques>
    )
}

export default Destaques;