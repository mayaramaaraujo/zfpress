import React, { useState } from 'react'
import { CaixaServicos,CaixaDescricaoServicos, ListaServicos, SetaPraCima, SetaPraBaixo, Descricao, ContainerNomeServicos } from './styled-servicos';
import Seta from '../../assets/segattoseta.png'
import SetaBaixo from '../../assets/setabaixo.png'
import DescricaoServico from './DescricaoServico/DescricaoServico';
import ItemServico from './ItemServico/ItemServico';
import { dourado, grafite } from '../../constants/cores';

const mockDescricao = [
    {
        titulo: "ASSESSORIA DE IMPRENSA",
        descricao: "Sua história sendo contada da melhor forma. Ajudamos a construir e fortalecer sua imagem e sua marca junto aos veículos de comunicação. Dentro deste serviço é possível ter: ",
        servicos: ["Produção de textos como releases, notas, avisos e sugestões de pautas;", "Artigos", "Articulação para divulgação nos veículos de comunicação;", "Agendamento de entrevistas em emissoras de TV e Rádio;", "Agendamento e recepção de jornalistas de veículos;", "Fotografia: cobertura de eventos, portfólio e banco de imagens para empresas e colaboradores;", "Conferências e coletivas de imprensa;"]
    },
    {
        titulo: "COMUNICACAO INTERNA",
        descricao: "Sua história sendo contada da melhor forma. Ajudamos a construir e fortalecer sua imagem e sua marca junto aos veículos de comunicação. Dentro deste serviço é possível ter: ",
        servicos: ["Produção de textos como releases, notas, avisos e sugestões de pautas;", "Artigos", "Articulação para divulgação nos veículos de comunicação;", "Agendamento de entrevistas em emissoras de TV e Rádio;", "Agendamento e recepção de jornalistas de veículos;", "Fotografia: cobertura de eventos, portfólio e banco de imagens para empresas e colaboradores;", "Conferências e coletivas de imprensa;"]
    },
    {
        titulo: "CONTEÚDOS E PUBLICAÇÕES",
        descricao: "Sua história sendo contada da melhor forma. Ajudamos a construir e fortalecer sua imagem e sua marca junto aos veículos de comunicação. Dentro deste serviço é possível ter: ",
        servicos: ["Produção de textos como releases, notas, avisos e sugestões de pautas;", "Artigos", "Articulação para divulgação nos veículos de comunicação;", "Agendamento de entrevistas em emissoras de TV e Rádio;", "Agendamento e recepção de jornalistas de veículos;", "Fotografia: cobertura de eventos, portfólio e banco de imagens para empresas e colaboradores;", "Conferências e coletivas de imprensa;"]
    },
    {
        titulo: "GERENCIAMENTO DE CRISES",
        descricao: "Sua história sendo contada da melhor forma. Ajudamos a construir e fortalecer sua imagem e sua marca junto aos veículos de comunicação. Dentro deste serviço é possível ter: ",
        servicos: ["Produção de textos como releases, notas, avisos e sugestões de pautas;", "Artigos", "Articulação para divulgação nos veículos de comunicação;", "Agendamento de entrevistas em emissoras de TV e Rádio;", "Agendamento e recepção de jornalistas de veículos;", "Fotografia: cobertura de eventos, portfólio e banco de imagens para empresas e colaboradores;", "Conferências e coletivas de imprensa;"]
    },
    {
        titulo: "CLIPAGEM",
        descricao: "Sua história sendo contada da melhor forma. Ajudamos a construir e fortalecer sua imagem e sua marca junto aos veículos de comunicação. Dentro deste serviço é possível ter: ",
        servicos: ["Produção de textos como releases, notas, avisos e sugestões de pautas;", "Artigos", "Articulação para divulgação nos veículos de comunicação;", "Agendamento de entrevistas em emissoras de TV e Rádio;", "Agendamento e recepção de jornalistas de veículos;", "Fotografia: cobertura de eventos, portfólio e banco de imagens para empresas e colaboradores;", "Conferências e coletivas de imprensa;"]
    },
    {
        titulo: "MEDIA TRAINING",
        descricao: "Sua história sendo contada da melhor forma. Ajudamos a construir e fortalecer sua imagem e sua marca junto aos veículos de comunicação. Dentro deste serviço é possível ter: ",
        servicos: ["Produção de textos como releases, notas, avisos e sugestões de pautas;", "Artigos", "Articulação para divulgação nos veículos de comunicação;", "Agendamento de entrevistas em emissoras de TV e Rádio;", "Agendamento e recepção de jornalistas de veículos;", "Fotografia: cobertura de eventos, portfólio e banco de imagens para empresas e colaboradores;", "Conferências e coletivas de imprensa;"]
    }
]

function Servicos(){
    const [index, setIndex] = useState(0)

    const mudarServico = () => {
        if(index === 5){
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const mudarServicoCima = () => {
        if(index === 0){
            setIndex(5)
        } else {
            setIndex(index - 1)
        }
    }


    return(
        <CaixaServicos>
            <CaixaDescricaoServicos>
                <SetaPraCima src={Seta} onClick={mudarServicoCima} />
                    <DescricaoServico 
                        titulo={mockDescricao[index].titulo} 
                        descricao={mockDescricao[index].descricao} 
                        servicos={mockDescricao[index].servicos}
                    />                    
                <SetaPraBaixo src={SetaBaixo} onClick={() => mudarServico()} />               
            </CaixaDescricaoServicos>
            <ListaServicos>
                <ContainerNomeServicos>

                    {mockDescricao.map((item, i) => {
                        if(index === i){
                            return <ItemServico 
                                        servico={item.titulo} 
                                        fundo={dourado} 
                                        texto={grafite}
                                        setIndex={setIndex}
                                        index={i}
                                    />
                        }   
                        return <ItemServico 
                                    servico={item.titulo} 
                                    fundo={grafite} 
                                    texto={dourado}
                                    setIndex={setIndex}
                                    index={i} 
                                />
                    })}

                </ContainerNomeServicos>
            </ListaServicos>
        </CaixaServicos>
    )
}

export default Servicos;