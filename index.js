const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const allServices =require('./data.json')

app.get('/allData', (req, res) =>{
    res.send(allServices)
})