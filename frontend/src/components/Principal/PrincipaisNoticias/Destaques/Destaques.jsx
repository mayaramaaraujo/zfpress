import React, { useEffect, useState } from 'react'
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
        imagem: "https://picsum.photos/500/435",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    },
    {   
        imagem: "https://picsum.photos/500/436",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    },
    {   
        imagem: "https://picsum.photos/500/437",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    }
]

const mockSecundario = {
    titulo: "Secundário",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "https://picsum.photos/300/320"
}

function Destaques() {
    const [tamanho, setTamanho] = useState(mockDestaques.length - 1) //4
    const [imagemIndex, setImagemIndex] = useState(0) //0

    //console.log(tamanho)

    const ProximaImagem = () => {
        if(imagemIndex === tamanho){
            setImagemIndex(0)
        } else {
            setImagemIndex(imagemIndex + 1)
        }      
    }

    useEffect(() => {
        const intervaloId = setInterval(() => {
            ProximaImagem()
        }, 5000)

        return () => clearInterval(intervaloId)
    }, [imagemIndex])


    return (
        <CaixaDestaques>
            <DestaquePrincipal
                imagem={mockDestaques[imagemIndex].imagem}
                descricao={mockDestaques[imagemIndex].descricao}
                index={imagemIndex}
                setIndex={setImagemIndex}
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