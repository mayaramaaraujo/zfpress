import React, { useState } from 'react'
import { CoroaImg, LinksNav } from '../styled-nav'
import CoroaDourada from '../../.././assets/coroa.png'

function Link(props) {
    const [aparecerCoroa, setAparecer] = useState("none")

    const onMouseOverCoroa = () => {
        setAparecer("inline")
    }

    const onMouseOutCoroa = () => {
        setAparecer("none")
    }

    return (
        <div>
            <CoroaImg src={CoroaDourada} aparecerCoroa={aparecerCoroa}/>
            <LinksNav 
                onMouseOver={onMouseOverCoroa}
                onMouseOut={onMouseOutCoroa} 
                href=""
            >
                {props.caminho}
            
            </LinksNav>            
        </div>
    )
}

export default Link;