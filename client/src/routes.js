import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Importando componentes para rotas
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Register} />
            </Switch>  
        </BrowserRouter>
    );
}
