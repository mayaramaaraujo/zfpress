import React, { useState } from 'react';
import { CaixaCases, CaixaCasesTit, CasesCaixa, ContainerCases, SetaDireitaImg, SetaEsquerdaImg, SubTitulo, TituloCases } from './styled-cases';
import CoroaDourada from '../../assets/coroadourada.png'
import Case from './Case/Case';
import SetaEsquerda from '../../assets/setaesquerda.png'
import SetaDireita from '../../assets/setadireita.png'

const mockCases = [
    [
        {
            titulo: "Lorem ipsum",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac blandit mi. Mauris pellentesque sollicitudin tempor. ",
            imagens: ["https://picsum.photos/401/304", "https://picsum.photos/200/302", "https://picsum.photos/200/305", "https://picsum.photos/200/301"]
        },
        {
            titulo: "Lorem ipsum",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac blandit mi. Mauris pellentesque sollicitudin tempor. ",
            imagens: ["https://picsum.photos/400/301", "https://picsum.photos/200/303", "https://picsum.photos/200/302", "https://picsum.photos/200/305"]
        }
    ],
    [
        {
            titulo: "Lorem ipsum",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac blandit mi. Mauris pellentesque sollicitudin tempor. ",
            imagens: ["https://picsum.photos/401/301", "https://picsum.photos/200/305", "https://picsum.photos/200/303", "https://picsum.photos/200/302"]
        },
        {
            titulo: "Lorem ipsum",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac blandit mi. Mauris pellentesque sollicitudin tempor. ",
            imagens: ["https://picsum.photos/406/300", "https://picsum.photos/200/304", "https://picsum.photos/200/303", "https://picsum.photos/200/302"]
        }
    ],
]

function Cases() {
    const [posicao, setPosicao] = useState(0)
    
    const passarParaDireita = () => {
        setPosicao(posicao + 1)
        if(posicao === (mockCases[0].length - 1)){
            setPosicao(0)
        }
    }

    const passarParaEsquerda = () => {
        if(posicao > 0){
            setPosicao(posicao - 1)
        } else {
            setPosicao(mockCases[0].length - 1)
        }
    }


    return (
        <CasesCaixa>
            <CaixaCasesTit>
                <img src={CoroaDourada} />
                <TituloCases>CASES</TituloCases>
                <SubTitulo>ENTRETERIMENTO</SubTitulo>                
            </CaixaCasesTit>
            <ContainerCases>
                <SetaEsquerdaImg src={SetaEsquerda} onClick={passarParaEsquerda}/>
                    <CaixaCases>
                        {mockCases[posicao].map((item,i) => {
                            return <Case key={i} titulo={item.titulo} descricao={item.descricao} imagens={item.imagens} />
                        })}
                    </CaixaCases>                    
                <SetaDireitaImg src={SetaDireita} onClick={passarParaDireita}/>
            </ContainerCases>
        </CasesCaixa>
    )
}

export default Cases;