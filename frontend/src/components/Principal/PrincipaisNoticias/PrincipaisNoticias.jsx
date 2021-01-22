import React from 'react'
import { CaixaNoticiasPrincipais } from '../styled-principal';
import Destaques from './Destaques/Destaques';
import SubDestaques from './SubDestaques/SubDestaques';

function PrincipaisNoticias() {
    return (
        <CaixaNoticiasPrincipais>
            <Destaques />
            <SubDestaques />
        </CaixaNoticiasPrincipais>
    )
}

export default PrincipaisNoticias;