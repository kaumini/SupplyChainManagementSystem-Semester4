const express =  require('express');
const {db} = require('../db/database');

const router = express.Router();



router.post('/',(req,res)=>{
    db.getConnection((err,con)=>{
        if(err){
            res.send('Database connection error');
            return;
        }
        else{
            let data = req.body;
            let sql = `INSERT INTO customers VALUES("${data.customerId}","${data.customerType}","${data.firstName}","${data.lastName}","${data.city}","${data.street}","${data.num}","${data.phone}")`;
            con.query(sql,(err,result,fields)=>{
                if(err){
                    console.log(err);
                    res.status(400).send(err);
                }
                res.send(result);
            });
            con.release();
        }
    });
    
});


module.exports = router;