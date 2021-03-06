import React, { useState } from 'react'
import { CoroaImg, LinksNav } from '../styled-nav'


function Link(props) {
    return (
            <LinksNav>
                {props.caminho}
            </LinksNav>
    )
}

export default Link;