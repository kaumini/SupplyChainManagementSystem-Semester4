const express =  require('express');
const {db} = require('../db/database');
const bcrypt = require('bcrypt');

const router = express.Router();

/********************************
sample valid schema for post ree json 
    {
        "email":"afjkkk@b.com",
        "hash_":"123546"
    }
 ******************************/

router.post('/',async (req,res)=>{

    db.getConnection((err,con)=>{
        if(err){
            res.send('Database connection error');
            return;
        }
        else{
            let sql = 'SELECT hash_ FROM users WHERE users.email=?';

            return con.query(sql,req.body.email,(err,result,fields)=>{
                if(err){
                    console.log(err);
                    return res.status(400).send(err);
                }
                
                (async (hash)=>{
                    const isValid = await bcrypt.compare(req.body.hash_,hash);
                    if(!isValid) return res.status(400).send('Invalid email or password!');
                    res.send(true);  
                })(result[0].hash_);
                
            });  
        }

        con.release();
    });  
});


module.exports = router;