import React from 'react'
import { CaixaSubDestaques } from '../../styled-principal';
import NoticiaSubDestaque from './NoticiaSubDestaque/NoticiaSubDestaque';

const mockSubDestaques = {
    imagem: "https://picsum.photos/500/150",
    titulo: "Lorem Ipsom",
    descricao: "Lorem ipsum dolor sit amet,consec tetuer adipi scing elit, sed diam"
}

function SubDestaques() {
    return (
        <CaixaSubDestaques>
            <NoticiaSubDestaque 
                imagem={mockSubDestaques.imagem}
                titulo={mockSubDestaques.titulo}
                descricao={mockSubDestaques.descricao}
            />

            <NoticiaSubDestaque 
                imagem={mockSubDestaques.imagem}
                titulo={mockSubDestaques.titulo}
                descricao={mockSubDestaques.descricao}
            />
        </CaixaSubDestaques>
    )
}

export default SubDestaques;