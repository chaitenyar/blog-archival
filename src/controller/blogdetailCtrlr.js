const express= require('express');
const router =new express.Router();

const Blogdetails=require('../model/blog_detailModel');

router.post('/save-blogdetail',async (req,res,next)=>{

    
    console.log("save-blogdetail>>",req.body)
    const blogdetailobj =new Blogdetails(req.body)
    try{
        const result= await blogdetailobj.save()
        if(result){
            res.status(200).send(result)
        }else{
            res.status(400).send("not add try again")
        }
    }catch(error){
               res.status(400).send(error);
    }
   

})  



router.get('/getallblogs',async (req,res,next)=>{
    try {
     const result= await Blogdetails.find()
         res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }

})

module.exports=router;