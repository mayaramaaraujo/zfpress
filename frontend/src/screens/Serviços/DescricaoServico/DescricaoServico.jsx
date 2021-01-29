import React from 'react'
import { Descricao, ParagDescricao, ServicosLista, TitDescricao } from '../styled-servicos';

function DescricaoServico(props){
    return (
        <Descricao>
            <TitDescricao>{props.titulo}</TitDescricao>
            <ParagDescricao>{props.descricao}</ParagDescricao>
            {props.servicos.map((item) => {
                return <ServicosLista>{item}</ServicosLista>
            })}
        </Descricao>
    )
}

export default DescricaoServico;