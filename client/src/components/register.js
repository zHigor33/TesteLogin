import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';

export default function Register() {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function submit() {
        Axios.post(
            "http://localhost:3001/register", 
            {
                username: username, 
                userPassword: password
            }).then((response) => {
                console.log(response);
            });
    }

    return (
        <>
            <div>Cadastro</div>
            <label>Username</label>
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => submit()} >Submit</button>
            <button onClick={() => history.push('/')}>Tela de Login</button>
        </>
    );
}