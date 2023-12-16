const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello i am base route')
})

app.get('/home',(req,res)=>{
    res.send('hello i am home route')
})

app.get('/about',(req,res)=>{
    res.send('hello i am about route')
})

app.listen(9000,()=>{
    console.log('listening to the server')
})