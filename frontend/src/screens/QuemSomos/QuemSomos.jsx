import React from 'react'
import { CaixaParagrafo, CaixaQuemSomos, CaixaTitulo, ContainerTexto, ParagrafoQuemSomos, TituloQuemSomos1, TituloQuemSomos2 } from './quemsomos-styled';

function QuemSomos(){
    return(
        <CaixaQuemSomos>

            <CaixaTitulo>
                O QUE FAZEMOS
            </CaixaTitulo>

            <ContainerTexto>
                <CaixaParagrafo>
                    <ParagrafoQuemSomos>Assessoria de Imprensa Full Service</ParagrafoQuemSomos>
                    <ParagrafoQuemSomos>A ZF Press é uma agência focada em assessoria de imprensa e relações públicas. Nascida em 2015, ela é uma das empresas do Grupo ZF.</ParagrafoQuemSomos>
                    <ParagrafoQuemSomos>
                        O principal objetivo da marca é ajudar a contar a história da sua marca da melhor forma possível, utilizando todos  os meios e materiais disponíveis para enviar aos veículos de imprensa mais relevantes no cenário regional, nacional e internacional.
                    </ParagrafoQuemSomos>
                </CaixaParagrafo>
            </ContainerTexto>

        </CaixaQuemSomos>
    )
}

export default QuemSomos;