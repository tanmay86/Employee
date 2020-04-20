const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const employee = mongoose.model('Employees');

router.get('/', (req, res) => {


    employee.find({}, function (err, docs) {

        res.json(docs);
    });




});

router.get('/:id', (req, res) => {

    var empid = req.params.id;

    employee.findById(empid, function (err, doc) {
        res.json(doc);
    });



});

router.post('/', (req, res) => {


    if (req.body) {
        var emp = new employee();

        emp.Name = req.body.Name;
        emp.Gender = req.body.Gender;
        emp.Email = req.body.Email;
        emp.PhoneNumber = req.body.PhoneNumber;
        emp.contactpreference = req.body.contactpreference;
        emp.DateOfBirth = req.body.DateOfBirth;
        emp.Department = req.body.Department;
        emp.IsActive = req.body.IsActive;
        emp.PhotoPath = req.body.PhotoPath;
        emp.Password = req.body.Password;
        emp.ConfirmPassword = req.body.ConfirmPassword;

        emp.save((err) => {
            if (!err) {
                console.log('record saved');
                res.json('Saved');

            }

        });
    }
    else {
        console.log('record not saved');
        res.json('Not Saved');

    }

});

router.delete('/:id', (req, res) => {

    employee.findByIdAndDelete(req.params.id, (err) => {

        if (!err) {
            res.json('Deleted');
        }
        else {
            console.log(err);
        }

    });


});


router.put('/:id', (req, res) => {


    employee.findOne({ _id: req.params.id }, function (err, doc) {
        if (!err) {
            if(req.body)
            {
            doc.Name = req.body.Name;
            doc.Gender = req.body.Gender;
            doc.Email = req.body.Email;
            doc.PhoneNumber = req.body.PhoneNumber;
            doc.contactpreference = req.body.contactpreference;
            doc.DateOfBirth = req.body.DateOfBirth;
            doc.Department = req.body.Department;
            doc.IsActive = req.body.IsActive;
            doc.PhotoPath = req.body.PhotoPath;
            doc.Password = req.body.Password;
            doc.ConfirmPassword = req.body.ConfirmPassword;
            doc.save();
            console.log('Updated');
            res.json('Updated');
            }
           else{
            console.log('Not Updated');
            res.json('Not Updated');
           } 
        }
        else {
            console.log('Not Updated');
            res.json('Not Updated');
        }
    });



});

module.exports = router;