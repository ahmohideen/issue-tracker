const express = require('express');

const router = express.Router();

const Issue = require('../models/addIssue');

router.get('/api', (req, res) =>{
   
    Issue.find({ })
    .then((data) => {
        console.log('Data: ', data);
        res.json(data)
    })
    .catch((error) => {
        console.log('error', error);
    });


    
});

router.post('/api/save', (req, res) =>{
    console.log('Body: ', req.body)
    const data = req.body;
    //read last id here and update id number

    const newAddIssue = new Issue(data);
    newAddIssue.save((error) => {
        if(error){
            res.status(500).json({
                msg: 'problem!'
            })
        }
        else{
            res.json({
                msg: 'data saved'
            })
        }
    })


    
});





router.get('/api/name', (req, res) =>{
    const data = {
        name: 'noor',
        age: 19
    };
    res.json(data)
});


router.delete('/api/delete/:name', (req, res) => {
    //okay so now we know the problem is here
    //aiyah
    console.log(req.params.name)
    Issue.deleteOne({
        name: req.params.name
      }, function (err) {
        if (err){
            res.status(404).json({
                msg: 'problem deleting!'
            })
        } 
        else{
            res.json({ message: 'Issue Deleted'});
        } 
    });

});

module.exports = router;