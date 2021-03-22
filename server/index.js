const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password',
    database:'routes'
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const userPassword = req.body.userPassword;

    db.query('INSERT INTO users (username, userPassword) VALUES (?,?)', [username, userPassword], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running server");
});
