import React from 'react'
import { CaixaImagensCase, CaseCaixa , ImagemPrincipal, ImagemSecundaria, TituloCase} from '../styled-cases';

function Case(props) {

    return (
        <CaseCaixa>
            <TituloCase>{props.titulo}</TituloCase>
            <p>{props.descricao}</p>
            <CaixaImagensCase>
                {props.imagens.map((imagem, i) => { 

                    if(i == 0){
                        return <ImagemPrincipal src={imagem} />
                    } else {
                        return <ImagemSecundaria src={imagem}/>
                    }                   
                })}
            </CaixaImagensCase>

        </CaseCaixa>
    )
}

export default Case;