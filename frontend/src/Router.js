import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CabecalhoAdmin from './screens/Admin/Cabecalho';
import CadastroNoticia from './screens/Admin/CadastroNoticia/CadastroNoticia';
import Login from './screens/Admin/Login/Login';
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
            <Login />
          </Route>
          <Route exact path="/admin/noticia">
            <CabecalhoAdmin />
            <CadastroNoticia />
          </Route>
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default Router;
