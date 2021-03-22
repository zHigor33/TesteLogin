import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();

    function Login() {
        return history.push('/')
    }
    
    return (
        <>
            <div>Login</div>
            <button onClick={() => Login()}>Efetuar Login</button>
        </>
    );
}