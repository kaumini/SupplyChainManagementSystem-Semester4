const express =  require('express');
const {db} = require('../db/database');

const router = express.Router();

/************************************* 
sample valid schema for post req json
{
	"customerId":"2",
	"customerType":"retailer",
	"firstName":"isuruul",
	"lastName":"ma",
	"city":"gampaha",
	"street":"jsjs",
	"num":"1",
	"phone":"0778260669"
}
 ***************************************/

router.post('/',async (req,res)=>{
    let data = req.body;

    db.getConnection((err,con)=>{
        if(err) return res.status(500).send('Database connection error');
         
        let sql = 'INSERT INTO customers SET ?';
        con.query(sql,data,(err,result,fields)=>{
            if(err){
                console.log(err);
                res.status(400).send(err);
                return;
            }
            res.send(result);
        });
        
        con.release();
    });
    
});

router.get('/',async (req,res)=>{
    db.getConnection((err,con)=>{
        if(err) return res.status(500).send('Database connection error');

        let sql = 'SELECT * FROM customers';

        con.query(sql,(err,result,fields)=>{
            if(err){
                console.log(err);
                res.status(400).send(err);
                return;
            }
            res.send(result);
        });
    
        con.release();
    }); 
});


module.exports = router;