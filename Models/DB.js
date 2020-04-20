
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Employee',{useNewUrlParser:true},(err)=>{
if(!err){

    console.log('DB connected');
}


});
require('./Employee.model');
