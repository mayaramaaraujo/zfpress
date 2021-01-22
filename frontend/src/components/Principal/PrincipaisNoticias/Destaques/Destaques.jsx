import React from 'react'
import { CaixaDestaques } from '../../styled-principal';
import DestaquePrincipal from './DestaquePrincipal.jsx/DestaquePrincipal';

const mockDestaques = [
    {   
        imagem: "https://picsum.photos/700/330",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci euismod eros commodo tincidunt."
    }
]

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
        </CaixaDestaques>
    )
}

export default Destaques;