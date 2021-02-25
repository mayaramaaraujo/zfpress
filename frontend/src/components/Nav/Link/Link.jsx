import React, { useState } from 'react'
import { CoroaImg, LinksNav } from '../styled-nav'
import CoroaDourada from '../../.././assets/coroa.png'


function Link(props) {

    return (
            <LinksNav>
                {props.caminho}
            </LinksNav>
    )
}

export default Link;