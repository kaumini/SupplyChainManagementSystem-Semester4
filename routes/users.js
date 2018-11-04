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
            let sql = `INSERT INTO users(userType,hash_) VALUES("${data.userType}","${data.hash}")`;
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