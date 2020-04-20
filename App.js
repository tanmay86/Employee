const express= require('express');
const app =express();
var cors = require('cors')
require('./Models/DB');
var bodyParser = require('body-parser');

app.use(cors());
const employeecontroller =require('./Controller/Employee.controller');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000,()=> {
console.log('app is listening port 3000');

});

app.use('/api/employee',employeecontroller);
