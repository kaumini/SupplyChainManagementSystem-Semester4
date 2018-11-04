const express =  require('express');
const morgan = require('morgan');



//routes
const users = require('./routes/users')

const app =  express();

//middlewear
app.use(morgan('tiny'));
app.use(express.json());





app.use('/api/users',users);


app.listen(3000,()=>{
    console.log('server started on port 3000');
});


