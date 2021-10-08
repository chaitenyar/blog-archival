const mongoose=require('mongoose');
const validator=require('validator');

const Category=mongoose.Schema({
   
    categorytype:{
        type:String,
        required:true,
        unique:[true,'category is already present'],
    }  
})

const categorydetails =new mongoose.model('categorydetails',Category);

module.exports=categorydetails;
