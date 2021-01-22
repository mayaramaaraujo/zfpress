import React from 'react'
import NoticiasSecundarias from './NoticiasSecundarias/NoticiasSecundarias';
import PrincipaisNoticias from './PrincipaisNoticias/PrincipaisNoticias';
import { CaixaPrincipal } from './styled-principal';

function Principal() {
    return (
        <CaixaPrincipal>
            <PrincipaisNoticias />
            <NoticiasSecundarias />
        </CaixaPrincipal>
    )
}

export default Principal;