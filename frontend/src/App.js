import { useRef } from 'react';
import './App.css';
import Link from './components/Nav/Link/Link';
import { NavCaixa } from './components/Nav/styled-nav';
import Rodape from './components/Rodape/Rodape';
import Cases from './screens/Cases/Cases.jsx';
import Clientes from './screens/Clientes/Clientes';
import NossaEstrutura from './screens/NossaEstrutura/NossaEstrutura';
import QuemSomos from './screens/QuemSomos/QuemSomos';
import Servicos from './screens/Serviços/Servicos';
import Construcao from './screens/construcao';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Principal from './components/Principal/Principal';

function App() {
  const inicio = useRef(null)
  const quemSomos = useRef(null)
  const nossaEstrutura = useRef(null)
  const servicos = useRef(null)
  const clientes = useRef(null)
  const cases = useRef(null)
  const rodape = useRef(null)

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"})
  }

  const estaEmConstrucao = false

  return (
    <div className='App'>
        {estaEmConstrucao ? <Construcao /> : <div>
          
        <div ref={inicio} className="inicio">
          <Cabecalho/>
          <NavCaixa>
            <div onClick={() => scrollTo(quemSomos)}><Link caminho="QUEM SOMOS"/></div>
            <div onClick={() => scrollTo(nossaEstrutura)}><Link caminho="NOSSA ESTRUTURA"/></div>
            <div onClick={() => scrollTo(servicos)}><Link caminho="SERVIÇOS" /></div>
            <div onClick={() => scrollTo(clientes)}><Link caminho="CLIENTES" /></div>
            <div onClick={() => scrollTo(cases)}><Link caminho="CASES" /></div>
            <div onClick={() => scrollTo(inicio)}><Link caminho="RELEASES" /></div>
            <div onClick={() => scrollTo(rodape)}><Link caminho="CONTATO" /></div>
          </NavCaixa>
          <Principal/>
        </div>
        <div ref={quemSomos} className="quemsomos">
          <QuemSomos />          
        </div>
        <div ref={nossaEstrutura}>
          <NossaEstrutura />
        </div>
        <div ref={servicos}>
          <Servicos />
        </div>
        <div ref={clientes}>
          <Clientes />
        </div>
        <div ref={cases}>
          <Cases />
        </div>        
        <div className="nav-footer">
          <div className="center">
          <NavCaixa>
            <div onClick={() => scrollTo(quemSomos)}><Link caminho="QUEM SOMOS"/></div>
            <div onClick={() => scrollTo(nossaEstrutura)}><Link caminho="NOSSA ESTRUTURA"/></div>
            <div onClick={() => scrollTo(servicos)}><Link caminho="SERVIÇOS" /></div>
            <div onClick={() => scrollTo(clientes)}><Link caminho="CLIENTES" /></div>
            <div onClick={() => scrollTo(cases)}><Link caminho="CASES" /></div>
            <div onClick={() => scrollTo(inicio)}><Link caminho="RELEASES" /></div>
            <div onClick={() => scrollTo(rodape)}><Link caminho="CONTATO" /></div>
          </NavCaixa>
          </div>
        </div>
      <div ref={rodape}>
        <Rodape/>
      </div>
      </div> }

      
    </div>
  );
}

export default App;
