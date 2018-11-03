const express =  require('express');
const {db} = require('../db/database');

const router = express.Router();



router.get('/',(req,res)=>{
    let sql = 'INSERT INTO users VALUES("1","customer","123",NULL)';
    db.query(sql,(err,result,fields)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    });
});


module.exports = router;