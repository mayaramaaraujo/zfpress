import React from 'react'
import { Descricao, ParagDescricao, ServicosLista, TitDescricao } from '../styled-servicos';

function DescricaoServico(props){
    return (
        <Descricao>
            <TitDescricao>{props.titulo}</TitDescricao>
            <ParagDescricao>{props.descricao}</ParagDescricao>
            {props.servicos.map((item, i) => {
                return <ServicosLista key={i}>{item}</ServicosLista>
            })}
        </Descricao>
    )
}

export default DescricaoServico;