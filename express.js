const express = require('express')
const app = express()
const port = 3000

app.get('/' , (req , res)=>{
    res.send('hello world')
})

app.get('/about' , (req , res)=>{
    res.send('hello worldly peoples')
})

app.listen(port , ()=>{
    console.log(`example app listening at ${port}`)
})