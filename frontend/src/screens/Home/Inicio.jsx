import { func } from 'prop-types'
import React from 'react'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Nav from '../../components/Nav/nav'
import Principal from '../../components/Principal/Principal'

function Inicio() {
    return (
        <div>
            <Cabecalho />
            <Nav />
            <Principal />
        </div>
    )
}

export default Inicio