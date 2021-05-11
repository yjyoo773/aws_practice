"use strict";

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.status(200).send('this is the homepage. try adding your name to the url')
})

// app.get('/:name',(req,res)=>{
//     let name = req.params.name
//     res.status(200).send(`Hello ${name}!`)
// })

app.listen(PORT, () => {
  `On port ${PORT}`;
});
