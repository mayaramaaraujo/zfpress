import React, { useState, useEffect } from 'react'
import { CaixaBolinhas, CaixaDestaquePrincipal, CaixaImagemDestaque, DescricaoDestaque} from '../../../styled-principal';
import BolinhaBranca from './Bolinhas/BolinhaBranca';
import BolinhaCinza from './Bolinhas/BolinhaCinza';
import axios from 'axios';
import { BaseUrlApi } from '../../../../../constants/linksUteis';

function DestaquePrincipal(props) {

    const [noticias, setNoticias] = useState()

    const PegarDestaquesPrincipais = async () => {
        try {
           const response = await axios.get(`${BaseUrlApi}/noticia/principais`)
           setNoticias(response.data)
        } catch (error) {
            console.log(error)
        }        
    }

    useEffect(() => {
        PegarDestaquesPrincipais()
    }, [])

    return (
        <CaixaDestaquePrincipal>
            {noticias ? <span>            
            <CaixaImagemDestaque imagem={noticias[props.index].imagem}/>
            <DescricaoDestaque>{noticias[props.index].titulo}</DescricaoDestaque>
            <CaixaBolinhas>

                {(props.index === 0) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 1) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 2) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 3) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 4) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 5) ?  <BolinhaCinza /> : <BolinhaBranca />}
                {(props.index === 6) ?  <BolinhaCinza /> : <BolinhaBranca />}
                
            </CaixaBolinhas> </span> : "Carregando .. "}
            

        </CaixaDestaquePrincipal>
    )
}

export default DestaquePrincipal;