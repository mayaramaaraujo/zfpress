import React from 'react'
import { 
    CaixaNossaEstrutura, 
    CaixaTexto, 
    CaixaImagens, 
    Coroa, 
    TituloNossaEstrutura, 
    CaixaTitulo, 
    TextoNossaEstrutura, 
    Img1, 
    Img2, 
    Img3 
} from './styled-nossaestrutura';
import CoroaPreta from '../../assets/coroapreta.png'

function NossaEstrutura(){
    return (
        <CaixaNossaEstrutura>
            <CaixaTexto>
                <CaixaTitulo>
                    <Coroa src={CoroaPreta} />                    
                    <TituloNossaEstrutura variant="h3">NOSSA ESTRUTURA</TituloNossaEstrutura>
                </CaixaTitulo>
                <TextoNossaEstrutura>
                    A ZF Press está localizada no prédio do Grupo ZF que contempla as marcas: <strong>ZF Xperience, ZF ALL, ZF comunicação e ZF Press.</strong> Dispomos de uma estrutura completa e moderna, para proporcionar exclusividade e conforto a seus colaboradores e clientes. Com salas de reunião e auditório, estamos prontos para qualquer ocasião.
                </TextoNossaEstrutura>
            </CaixaTexto>
            <CaixaImagens>
                <Img1 img="https://picsum.photos/400/200" />
                <Img2 img="https://picsum.photos/450/200" />
                <Img3 img="https://picsum.photos/380/200" />
            </CaixaImagens>
        </CaixaNossaEstrutura>
    )
}

export default NossaEstrutura;