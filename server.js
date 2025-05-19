const express = require('express');
const cors = require('cors');
const dotenv=require('dotenv').config()

const app=express()
app.use(express.json())
app.use(cors())
const port=process.env.PORT || 3030


app.get('/',(req,res) => {
    res.send('Hello World')
})


app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`);
})