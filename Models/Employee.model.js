 const mongoose =require('mongoose');

 const employeescheema = new mongoose.Schema({
    
    
    Name: {type: String},
    Gender: {type: String},
    Email: {type: String},
    PhoneNumber: {type: Number},
    contactpreference: {type: String},
    DateOfBirth: {type: String},
    Department: {type: String},
    IsActive: {type: Boolean},
    PhotoPath: {type: String},
    Password: {type: String},
    ConfirmPassword: {type: String}
    

 });
 
 
mongoose.model('Employees',employeescheema);

    