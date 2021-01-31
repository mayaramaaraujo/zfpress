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
import ZF1 from '../../assets/zfpress1.jpg'
import ZF2 from '../../assets/zfpress2.jpg'
import ZF3 from '../../assets/zfpress3.jpg'
import '../../App.css';


function NossaEstrutura(){
    return (
        <CaixaNossaEstrutura>
            <CaixaTexto>
                <CaixaTitulo >
                    <Coroa src={CoroaPreta} />                    
                    <TituloNossaEstrutura className="Clientes">NOSSA ESTRUTURA</TituloNossaEstrutura>
                </CaixaTitulo>
                <TextoNossaEstrutura>
                    A ZF Press está localizada no prédio do Grupo ZF que contempla as marcas: <strong>ZF Xperience, ZF ALL, ZF comunicação e ZF Press.</strong> Dispomos de uma estrutura completa e moderna, para proporcionar exclusividade e conforto a seus colaboradores e clientes. Com salas de reunião e auditório, estamos prontos para qualquer ocasião.
                </TextoNossaEstrutura>
            </CaixaTexto>
            <CaixaImagens>
                <Img1 img={ZF3} />
                <Img2 img={ZF2} />
                <Img3 img={ZF1} />
            </CaixaImagens>
        </CaixaNossaEstrutura>
    )
}

export default NossaEstrutura;