const mongoose=require('mongoose');
const validator=require('validator');
const Blogdetails=mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    content:{
        type:String,

       
    },
    description:{
        type:String,
      
       
    },
    publishdate:{
        type:Date,
        default:Date.now()
    },
    author:{
        type:String,
     
        
    },
    imageurl:{
        type:String,   
    },
    email:{
        type:String,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                 throw new Error("Email is invalid")
            }
        }
    },
    category:{
        type:String,
      
    },

    // mobile:{
    //     type:String,
    //     required:true,
    //     min:10,
    //     max:10,
    //     unique:[true,"alredy present"]

    // },

    // password:{
    //     type:String,
    //     required:true,
    //     validate(value){
    //      if(value<123){
    //          throw new Error("should less than 123")
    //      }
    //     }
    // },
})



//creating collection

const blog_detail =new mongoose.model('Blogdetails',Blogdetails);

module.exports=blog_detail;
