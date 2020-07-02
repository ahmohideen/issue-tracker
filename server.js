const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny')); //this is an http request logger

app.get('/api', (req, res) =>{
    const data = {
        name: 'hana',
        age: 19
    };
    res.json(data)
});

app.get('/api/name', (req, res) =>{
    const data = {
        name: 'layla',
        age: 19
    };
    res.json(data)
});

app.listen(PORT, console.log(`Server is staring at ${PORT}`));
