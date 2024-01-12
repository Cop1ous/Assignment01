const express = require('express');
const app = express();

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'pass') {
        res.send('Login successful!');
    } else {
        res.send('Login failed. Please check your username and password.');
    }
});
