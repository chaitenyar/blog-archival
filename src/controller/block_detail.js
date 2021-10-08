
const express= require('express');

const router =new express.Router();

const Userdetail=require('../model/userdetailModel');









router.post('/userdetail',async (req,res,next)=>{

    console.log(req.body)

    const newuserdetail =new Userdetail(req.body)

   const result= await newuserdetail.save().then(()=>{

        res.status(200).send(userdetail)



    }).catch((err)=>{

        res.status(400).send(err)

    });

})  



router.get('/getuserdetail',async (req,res,next)=>{

       try {

        const result= await Userdetail.find()



            res.status(200).send(result);

        

       } catch (error) {

           res.status(400).send(error);

       }

})

router.get('/getuserdetail/:name', async (req,res,next)=>{

     try {      

         const name=req.params.name;

         console.log(name)

         console.log(req.params) 

       const result=await Userdetail.find(req.params);

       if(!result){

           res.status(400).send("not found")

       }else{

           res.status(200).send(result);

       }

     } catch (error) {

         console.log(error);

     }

})



router.delete('/userdetail/:id',async (req,res,next)=>{



    Userdetail.delete()

})



router.post('/login',async (req,res,next)=>{

    try {

         console.log(req.body)

        const result= await Userdetail.find(req.body);

         if(result.length>0){

             setTimeout(()=>{



                 res.status(200).send({"responseStatus":"success",

                   data:result

                });

             },5000)

         }else{

             res.status(404).send({responseStatus:"not found"})

         }

    } catch (error) {

        console.log(error);

    }

})



module.exports=router;
