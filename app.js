const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('middleware');
    next();
});
app.use((req,res,next)=>{
    console.log('another middleware');
    res.send('<h1>Hello express</h1>');
});
app.listen(3000);