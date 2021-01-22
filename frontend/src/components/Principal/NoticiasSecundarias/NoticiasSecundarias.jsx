import React from 'react'
import { CaixaNoticiasSecundarias, Paragrafo } from '../styled-principal';
import NoticiaSecundaria from './NoticiaSecundaria/NoticiaSecundaria';

const MockNoticiaSecundaria = {
    titulo: "Lorem Ipsum",
    descricao: "Lorem ipsum dolor sit amet,consec tetuer adi piscingelit , sed diam"
}

function NoticiasSecundarias() {
    return (
        <CaixaNoticiasSecundarias>
            <Paragrafo>MAIS LIDAS</Paragrafo>
            <NoticiaSecundaria 
                titulo={MockNoticiaSecundaria.titulo}
                descricao={MockNoticiaSecundaria.descricao}
            />
            
            <NoticiaSecundaria 
                titulo={MockNoticiaSecundaria.titulo}
                descricao={MockNoticiaSecundaria.descricao}
            />

            <NoticiaSecundaria 
                titulo={MockNoticiaSecundaria.titulo}
                descricao={MockNoticiaSecundaria.descricao}
            />

            <NoticiaSecundaria 
                titulo={MockNoticiaSecundaria.titulo}
                descricao={MockNoticiaSecundaria.descricao}
            />
        </CaixaNoticiasSecundarias>
    )
}

export default NoticiasSecundarias;