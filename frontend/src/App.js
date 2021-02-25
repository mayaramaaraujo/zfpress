import { useRef } from 'react';
import './App.css';
import Link from './components/Nav/Link/Link';
import { LinkCaixa, NavCaixa } from './components/Nav/styled-nav';
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
            <LinkCaixa onClick={() => scrollTo(quemSomos)}><Link caminho="O QUE FAZEMOS"/></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(nossaEstrutura)}><Link caminho="NOSSA ESTRUTURA"/></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(servicos)}><Link caminho="SERVIÇOS" /></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(clientes)}><Link caminho="CLIENTES" /></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(cases)}><Link caminho="CASES" /></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(inicio)}><Link caminho="RELEASES" /></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(rodape)}><Link caminho="CONTATO" /></LinkCaixa>
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
            <LinkCaixa onClick={() => scrollTo(quemSomos)}><Link caminho="O QUE FAZEMOS"/></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(nossaEstrutura)}><Link caminho="NOSSA ESTRUTURA"/></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(servicos)}><Link caminho="SERVIÇOS" /></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(clientes)}><Link caminho="CLIENTES" /></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(cases)}><Link caminho="CASES" /></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(inicio)}><Link caminho="RELEASES" /></LinkCaixa>
            <LinkCaixa onClick={() => scrollTo(rodape)}><Link caminho="CONTATO" /></LinkCaixa>
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
