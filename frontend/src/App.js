import './App.css';
import Inicio from './screens/Home/Inicio';
import NossaEstrutura from './screens/NossaEstrutura/NossaEstrutura';
import QuemSomos from './screens/QuemSomos/QuemSomos';

function App() {
  return (
    <div className='App'>
        <Inicio />
        <QuemSomos/>
        <NossaEstrutura />
    </div>
  );
}

export default App;
