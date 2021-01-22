import React from 'react'
import { CaixaDestaques } from '../../styled-principal';
import DestaquePrincipal from './DestaquePrincipal.jsx/DestaquePrincipal';
import DestaqueSecundario from './DestaqueSecundario/DestaqueSecundario';

const mockDestaques = [
    {   
        imagem: "https://picsum.photos/500/430",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    }
]

const mockSecundario = {
    titulo: "Lorem ipsum",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "https://picsum.photos/300/320"
}

function Destaques() {

    return (
        <CaixaDestaques>
           {mockDestaques.map((item) => {
               return (
                   <DestaquePrincipal
                        imagem={item.imagem}
                        descricao={item.descricao}
                    />
               )
           })}

        <DestaqueSecundario 
            titulo={mockSecundario.titulo}
            imagem={mockSecundario.imagem}
            descricao={mockSecundario.descricao}
        />
        </CaixaDestaques>
    )
}

export default Destaques;