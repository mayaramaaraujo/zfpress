import React, { useState } from 'react'
import { NavCaixa } from './styled-nav';
import Link from './Link/Link';

function Nav() {


    return (
        <NavCaixa>
            <Link caminho="QUEM SOMOS" />
            <Link caminho="NOSSA ESTRUTURA" />
            <Link caminho="SERVIÇOS" />
            <Link caminho="CLIENTES" />
            <Link caminho="CASES" />
            <Link caminho="RELEASES" />
            <Link caminho="CONTATO" />
        </NavCaixa>
    )
}


export default Nav;