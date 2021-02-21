import { useRef } from 'react';
import './App.css';
import Link from './components/Nav/Link/Link';
import { NavCaixa } from './components/Nav/styled-nav';
import Rodape from './components/Rodape/Rodape';
import Cases from './screens/Cases/Cases.jsx';
import Clientes from './screens/Clientes/Clientes';
import Inicio from './screens/Home/Inicio';
import NossaEstrutura from './screens/NossaEstrutura/NossaEstrutura';
import QuemSomos from './screens/QuemSomos/QuemSomos';
import Servicos from './screens/Serviços/Servicos';
import Construcao from './screens/construcao';

function App() {
  const inicio = useRef(null)
  const quemSomos = useRef(null)
  const nossaEstrutura = useRef(null)
  const servicos = useRef(null)
  const clientes = useRef(null)
  const cases = useRef(null)
  const rodape = useRef(null)

  const scrollToQuemSomos = () => {
    quemSomos.current.scrollIntoView()
  }

  const estaEmConstrucao = true

  return (
    <div className='App'>
        {estaEmConstrucao ? <Construcao /> : <div>
          
        <div ref={inicio} className="inicio">
          <Inicio />
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
            <div onClick={scrollToQuemSomos}><Link caminho="QUEM SOMOS" /></div>
            <div><Link caminho="NOSSA ESTRUTURA"/></div>
            <div><Link caminho="SERVIÇOS" /></div>
            <div><Link caminho="CLIENTES" /></div>
            <div><Link caminho="CASES" /></div>
            <div><Link caminho="RELEASES" /></div>
            <div><Link caminho="CONTATO" /></div>
          </NavCaixa>
          </div>
        </div>
      <div>
        <Rodape ref={rodape}/>
      </div>
      </div> }

      
    </div>
  );
}

export default App;
