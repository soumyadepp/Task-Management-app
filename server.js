const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Hello User')
})

app.get('/tasks',(req,res)=>{
    
})

app.listen(8090, () => {
    console.log('Server listening at http://localhost:8090')
})