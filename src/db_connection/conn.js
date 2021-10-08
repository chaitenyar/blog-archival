const mongoose=require('mongoose');

setTimeout(function() {

mongoose.connect("mongodb://localhost:27017/blog_details",{ useNewUrlParser: true,useUnifiedTopology: true,
}).then(()=>{

    console.log("success");

   

}).catch((error)=>console.log(error));



},1);
