const exp = require('constants');
const express = require('express');
const app = express();
const multer=require('multer');  //for form-data
var multerupload=multer();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(multerupload.array());
app.use(enableCors);
require('./db_connection/conn');
const Blogdetailrouter = require("./controller/blogdetailCtrlr");
const Categoryrouter = require("./controller/categoryController");
app.use(Blogdetailrouter);
app.use(Categoryrouter);
const port = process.env.PORT || 8000;
function enableCors(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', ' Authorization , Content-Type');
    next();
}
app.listen(port, () => {
    console.log(`app is running on ${port}`);
})
app.get('/',async(req,res,next)=>{
    try {
            res.status(200).send("Helloworld");
         } catch (error) {
           res.status(400).send(error);
       }
})




