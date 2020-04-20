
const mongoose=require('mongoose');

const constringprd ='mongodb://employeemongo:mKpWOabNFOsaa6nuTYL0aUbKc0AYy4KeHqinclm4BtJWJNQ0ljmoaIyei9UKEcy29nKchEVzBwEYhALQE7pI5w%3D%3D@employeemongo.mongo.cosmos.azure.com:10255/?ssl=true&appName=@employeemongo@'
const constringlocal ='mongodb://localhost:27017/Employee'
mongoose.connect(constringprd,{useNewUrlParser:true},(err)=>{
if(!err){

    console.log('DB connected');
}


});
require('./Employee.model');
