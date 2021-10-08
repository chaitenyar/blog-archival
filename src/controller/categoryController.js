const express= require('express');
const router =new express.Router();
const category_detail=require('../model/categoryModel');

router.post('/add-category',async (req,res,next)=>{
    console.log("add-category reqbody",req.body)
    const getbody=new category_detail(req.body);
    const result =await getbody.save().then(()=>{
        if(result){
            console.log("result",result);
            res.status(200).send(result);
        }
    }).catch((err)=>{
        console.log("error==>>",err.code)
        console.log("error==>>",err.name)
       
        res.status(400).send(err)
    });
})

router.get('/getallcategory',async (req,res,next)=>{
    try {
     const result= await category_detail.find()
         res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }

})


module.exports=router;