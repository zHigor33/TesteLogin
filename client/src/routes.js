import React, { useState } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// Token
import {isAuthenticated} from './auth.js';

// Importando componentes para rotas
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';

export default function Routes() {
    const [auth, setAuth] = useState(isAuthenticated);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" exact component={Register} />
                <PrivateRoute path="/pagina_inicial" exact component={Main} isAuth={auth} />
            </Switch>  
        </BrowserRouter>
    );
}

function PrivateRoute({isAuth, component: Component, ...rest}) {
    return (
        <Route {...rest} render={(props) => {
            if(isAuth === true) {
                return <Component />
            } else {
                return <Redirect to={{ pathname: '/', state: {from: props.location} }} />
            }
        }} />
    );
}
