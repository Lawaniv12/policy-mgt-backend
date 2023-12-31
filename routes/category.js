const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/add', auth.authenticateToken, checkRole.checkRole,(req,res,next)=> {
    let category = req.body;
    query = "insert into categories (categoryName) values(?)";
    connection.query(query,[category.categoryName], (err,results)=> {
        if(!err){
            return res.status(200).json({message: "Category Added Successfully"})
        }
        else {
            return res.status(4500).json(err);
        }
    })
})


router.get('/get',auth.authenticateToken,(req,res,next)=>{
    var query = "select * from categories order by categoryName";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }

        else{
            return res.status(500).json(err);
        }
    })
})

router.patch('/update', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    let product = req.body;
    var query = "update categories set categoryName=? where categoryID=?";
    connection.query(query, [product.categoryName, product.categoryID], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Category ID does not exist" });
            }
            return res.status(200).json({ message: "Category Successfully Updated" });
        } else {
            return res.status(500).json(err);
        }
    });
});

// router.patch('/update', auth.authenticateToken, checkRole.checkRole, (req,res,next)=> {
//     let product = req.body;
//     var query = "update categories set categoryName=? where categoryID=?";
//     connection.query(query,[product.categoryName,product.categoryID,], (err,results)=>{
//         if(!err){
//             if(results.affectedRows == 0){
//                 return res.status(404).json({message:"Category ID does not exist"});
//             }

//             return res.status(200).json({message: "Category Successfully Updated"});
//         }
//         else {
//             return res.status(500).json(err);
//         }
//     })

// })

module.exports = router;