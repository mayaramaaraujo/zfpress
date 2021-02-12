import './App.css';
import Nav from './components/Nav/nav';
import Rodape from './components/Rodape/Rodape';
import Cases from './screens/Cases/Cases.jsx';
import Clientes from './screens/Clientes/Clientes';
import Inicio from './screens/Home/Inicio';
import NossaEstrutura from './screens/NossaEstrutura/NossaEstrutura';
import QuemSomos from './screens/QuemSomos/QuemSomos';
import Servicos from './screens/Serviços/Servicos';

function App() {
  return (
    <div className='App'>
        <Inicio />
        <QuemSomos/>
        <NossaEstrutura />
        <Servicos />
        <Clientes />
        <Cases />
        <div className="nav-footer">
          <div className="center">
            <Nav />
          </div>
        </div>
        <Rodape />
    </div>
  );
}

export default App;
