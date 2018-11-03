const express =  require('express');
const morgan = require('morgan');
const mysql = require('mysql');

const app =  express();

app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send('done');
});



app.listen(3000,()=>{
    console.log('server started on port 3000');
});


