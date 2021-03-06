import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CabecalhoAdmin from './screens/Admin/Cabecalho';
import Admin from './screens/Admin/Cabecalho';
import CadastroPrincipal from './screens/Admin/CadastroPrincipal/CadastroPrincipal';
import PaginaInicial from './screens/PaginaInicial/PaginaInicial';

function Router() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PaginaInicial/>
          </Route>
          <Route exact path="/noticias">
            noticias
          </Route>
          <Route exact path="/noticia/:id">
            noticia id
          </Route>
          <Route exact path="/contato">
            contato
          </Route>
          <Route exact path="/expediente">
            expediente
          </Route>
          <Route exact path="/busca">
            busca
          </Route>
          <Route exact path="/releases">
            releases
          </Route>
          <Route exact path="/admin">
            <CabecalhoAdmin />
          </Route>
          <Route exact path="/admin/cadastro/principal">
            <CabecalhoAdmin />
            <CadastroPrincipal/>
          </Route>
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default Router;
