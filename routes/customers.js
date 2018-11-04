const express =  require('express');
const {db} = require('../db/database');

const router = express.Router();



router.post('/',async (req,res)=>{
    let data = req.body;
    
    db.getConnection((err,con)=>{
        if(err){
            res.send('Database connection error');
            return;
        }
        else{

            let sql = 'INSERT INTO customers SET ?';
            con.query(sql,data,(err,result,fields)=>{
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

router.get('/',async (req,res)=>{
    db.getConnection((err,con)=>{
        if(err){
            res.send('Database connection error');
            return;
        }
        else{
            let sql = 'SELECT * FROM customers';
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