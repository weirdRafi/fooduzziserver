const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const allServices =require('./data.json')

app.get('/allData', (req, res) =>{
    res.send(allServices)
})

app.get('/allData/:id', (req, res) =>{
    const id = req.params.id;
    const item = allServices?.find(pd => pd.id == id)
    res.send({item})
})


app.listen(3000, ()=>{
    console.log("server is running");
})
