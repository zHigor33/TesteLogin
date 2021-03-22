import React, { useState } from 'react';
import Axios from 'axios';

export default function Register() {
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
            <label>Username</label>
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => submit()} >Submit</button>
        </>
    );
}