const express = require('express');
const app = express()

app.get('/status', (req, res)=> {
    res.json({status: 'working ...'})
    
})

app.listen(3000, ()=>{
    console.log('rahul working;')
});