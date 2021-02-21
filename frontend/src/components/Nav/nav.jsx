import React from 'react'
import { NavCaixa } from './styled-nav';
import Link from './Link/Link';

const Nav = () => {
    return (
        <NavCaixa>
            <div><Link caminho="QUEM SOMOS" /></div>
            <div><Link caminho="NOSSA ESTRUTURA"/></div>
            <div><Link caminho="SERVIÇOS" /></div>
            <div><Link caminho="CLIENTES" /></div>
            <div><Link caminho="CASES" /></div>
            <div><Link caminho="RELEASES" /></div>
            <div><Link caminho="CONTATO" /></div>
        </NavCaixa>
    )
};

export default Nav;