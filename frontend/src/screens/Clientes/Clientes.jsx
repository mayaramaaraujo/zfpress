import React from 'react'
import '../../App.css';
import { CaixaClientes, CaixaClientesLogos, CaixaLogo, CaixaTituloClientes, CoroaImgClientes, Logo, TituloClientes } from './styled-clientes';
import CoroaDouradaClientes from '../../assets/coroadourada.png'
import Femina from '../../assets/femina.png'
import Urus from '../../assets/urus.png'
import TresAmericas from '../../assets/3amr.png'
import Apromat from '../../assets/apromat.png'
import Aurora from '../../assets/aurora.png'
import BrasilBeach from '../../assets/brasilbeach.png'
import Energisa from '../../assets/energisa.png'
import JohnDree from '../../assets/johndree.png'
import Feijoada from '../../assets/feijoada.png'
import Malcom from '../../assets/malcom.png'
import ShoppingPopular from '../../assets/shoppingpopular.png'
import Iir from '../../assets/iir.png'
import Valure from '../../assets/valure.png'
import SantaRosa from '../../assets/santarosa.png'
import OAB from '../../assets/oab.png'
import Segatto from '../../assets/segatto.png'

//const ArrayDeLogos = [Femina, Valure, TresAmericas, BrasilBeach, JohnDree, Feijoada, ShoppingPopular, Urus, Iir, Malcom, Aurora, Energisa, OAB, SantaRosa, Apromat, Segatto]

const ArrayDeLogos = [
    {
        imagem: Femina,
        site: "http://femina.com.br/"    
    },
    {
        imagem: Valure,
        site: "https://www.grupovalure.com.br/?gclid=Cj0KCQiAx9mABhD0ARIsAEfpavTAKho-tIftNt5NJ4upnFX8HMtl7zEP7xU05dpUunuM8MbT9M_8F4MaAvotEALw_wcB"
    },
    {
        imagem: TresAmericas,
        site: "http://www.shopping3americas.com.br/"
    },
    {
        imagem: BrasilBeach,
        site: "http://brasilbeach.com.br/"
    },
    {
        imagem: JohnDree,
        site: "https://www.deere.com.br/pt/index.html"
    },
    {
        imagem: Feijoada,
        site: "https://www.instagram.com/feijoadadeinvernooficial/?hl=pt-br"
    },
    {
        imagem: ShoppingPopular,
        site: "http://www.shoppingpopularcuiaba.com.br/"
    },
    {
        imagem: Urus,
        site: "https://urussteakhouse.com.br/"
    }, 
    {
        imagem: Iir,
        site: "https://www.google.com/"
    },
    {
        imagem: Malcom,
        site: "https://web.facebook.com/malcompub/?_rdc=1&_rdr"
    },
    {
        imagem: Aurora,
        site: "http://casaaurora.com.br"
    },
    {
        imagem: Energisa,
        site: "https://www.energisa.com.br/"
    },
    {
        imagem: OAB,
        site: "https://www.oabmt.org.br/"
    }, 
    {
        imagem: SantaRosa,
        site: "http://www.hospitalsantarosa.com.br/"
    },
    {
        imagem: Apromat,
        site: "http://apromat.org.br/"
    },
    {
        imagem: Segatto,
        site: "http://www.segattoadvocacia.com.br/"
    }
]


function Clientes() {
    return (
        <CaixaClientes className="Clientes">
            <CaixaTituloClientes>
                <CoroaImgClientes src={CoroaDouradaClientes} />
                <TituloClientes>CLIENTES</TituloClientes>
            </CaixaTituloClientes>
            <CaixaClientesLogos>
                
                {ArrayDeLogos.map((logo => {
                    return (
                        <CaixaLogo>
                            <a href={logo.site}>
                                <Logo src={logo.imagem} />
                            </a>
                        </CaixaLogo>
                    )
                }))}

            </CaixaClientesLogos>
        </CaixaClientes>
    )
}

export default Clientes;