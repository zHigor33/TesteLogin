import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function Login() {
        return history.push('/pagina_inicial')
    }
    
    return (
        <>
            <div>Login</div>
            <label>Username</label>
            <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={Login}>Efetuar Login</button>
            <button onClick={() => history.push('/cadastro')}>Efetuar Cadastro</button>
        </>
    );
}