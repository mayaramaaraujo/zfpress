import './App.css';
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
    </div>
  );
}

export default App;
