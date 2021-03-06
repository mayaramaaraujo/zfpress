import React, { useEffect, useState } from 'react'
import { CaixaDestaques } from '../../styled-principal';
import DestaquePrincipal from './DestaquePrincipal.jsx/DestaquePrincipal';
import DestaqueSecundario from './DestaqueSecundario/DestaqueSecundario';

const mockSecundario = {
    titulo: "Secundário",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "https://picsum.photos/300/320"
}

function Destaques(props) {
    const [tamanho, setTamanho] = useState(6) //4
    const [imagemIndex, setImagemIndex] = useState(0) //0

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
                //imagem={noticias[imagemIndex].imagem}
                //descricao={noticias[imagemIndex].texto}
                index={imagemIndex}
                setIndex={setImagemIndex}            />            

            <DestaqueSecundario 
                titulo={mockSecundario.titulo}
                imagem={mockSecundario.imagem}
                descricao={mockSecundario.descricao}
            />
        </CaixaDestaques>
    )
}

export default Destaques;