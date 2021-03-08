const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
var ObjectId=require('mongoose').Types.ObjectId;

//const db = "mongodb://localhost:27017/crudeDB";//For the localhost
//for mongoos atlas
const db="mongodb+srv://Harshu_123:Harshu_123@cluster0.40jt9.mongodb.net/Marvellous?authSource=admin&replicaSet=atlas-2hhko7-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
     
      console.log('Connected to mongodb')      
    }
});

router.get('/6f28b2eb-56a4-495a-86b6-9925944b7bd4/:id',(req,res)=>
{
    var user=new User();
    user.name=req.body.employee_id;
    console.log(user.name);
    let days=[

        {"id":"19e7f4ba-7bb6-4f6c-ae11-38c410e25dba","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:55 AM","out_time":"6:13 PM"},
{"id":"79e966b3-832d-48a9-87c5-aaf5daa8ca3e","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:19 AM","out_time":"4:25 PM"},
{"id":"8293ae15-deb4-44c4-bc03-a5bff6a3c2a0","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:28 AM","out_time":"5:35 PM"},
{"id":"b99fea8a-d0ad-4864-bf2c-60d821eec6ee","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:51 AM","out_time":"4:20 PM"},
{"id":"13775412-a571-41ff-a9bb-bc6881bd1bd4","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:18 AM","out_time":"6:51 PM"},
{"id":"a4be5c8c-27c2-4695-bf08-678bdc3cab6f","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:34 AM","out_time":"4:02 PM"},
{"id":"1772ad92-daae-4a67-8ff7-2cc000155e81","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:34 AM","out_time":"4:33 PM"},
{"id":"28546708-4090-4c00-9f01-5f217b3d965d","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:03 AM","out_time":"6:34 PM"},
{"id":"7ea24117-b101-460b-a735-ed2295cb0e41","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:41 AM","out_time":"6:22 PM"},
{"id":"641bb75b-eced-49ce-922e-0cb74df16168","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:59 AM","out_time":"6:01 PM"},
{"id":"bbd5be9e-4d1b-409e-a417-3e1baa2d9a0f","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:26 AM","out_time":"5:29 PM"},
{"id":"93fdbc05-bf7f-45e6-81d8-ee23f9fa2d5f","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:56 AM","out_time":"6:52 PM"},
{"id":"9750173b-ac30-4a55-9b2e-64859a79382c","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:33 AM","out_time":"6:09 PM"},
{"id":"4190b4cf-7e90-4f4e-b221-556924fe8ada","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:17 AM","out_time":"5:22 PM"},
{"id":"ee540220-8873-4e13-bf9a-6a5db884a4c9","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:20 AM","out_time":"5:31 PM"},
{"id":"158cfee1-6ba7-4800-9df1-388a0f49a3d9","employee_id":"6f28b2eb-56a4-495a-86b6-9925944b7bd4","in_time":"10:22 AM","out_time":"4:24 PM"}]

    
    res.json(days);
});

// router.get('/attendence/:id',(req,res)=>{
//         id=req.params.id;
//  console.log("attendenc",id);
// });

// router.get('/attendence/:value',(req,res)=>{

//        //id=req.params.id;
//        console.log("delete",id);
      
//       })


router.get('/events', (req,res) => {
     console.log("hello");

     let events=[
      
        {
            "id": "6f28b2eb-56a4-495a-86b6-9925944b7bd4",
            "first_name": "Julianne",
            "last_name": "Gorey",
            "email": "jgorey0@unicef.org",
            "gender": "Female",
            "gross_salary": 10000,
            "designation": "Senior Editor",
            "working_days": 16
        },
        {
            "id": "4f73d875-2a22-40cc-a9cb-73b6e1ef799a",
            "first_name": "Wolfy",
            "last_name": "Nott",
            "email": "wnott1@lycos.com",
            "gender": "Polygender",
            "gross_salary": 10000,
            "designation": "Senior Quality Engineer",
            "working_days": 19
        },
        {
            "id": "68180470-1a75-47c4-91a3-efdce1723186",
            "first_name": "Elyse",
            "last_name": "Spottiswoode",
            "email": "espottiswoode2@ebay.co.uk",
            "gender": "Female",
            "gross_salary": 10000,
            "designation": "Human Resources Assistant I",
            "working_days": 24
        },
        {
            "id": "26d0d430-d3ce-4c7b-879f-599e534110f8",
            "first_name": "Isabelle",
            "last_name": "Gillibrand",
            "email": "igillibrand3@ebay.com",
            "gender": "Non-binary",
            "gross_salary": 10000,
            "designation": "Web Designer II",
            "working_days": 23
        },
        {
            "id": "54b8ba3a-27eb-4129-a61b-e38d2fed1aec",
            "first_name": "Cherianne",
            "last_name": "Peet",
            "email": "cpeet4@altervista.org",
            "gender": "Non-binary",
            "gross_salary": 10000,
            "designation": "Desktop Support Technician",
            "working_days": 15
        },
        {
            "id": "fac3081b-a8f6-4593-b6e4-6d1abeeed8a0",
            "first_name": "Kyla",
            "last_name": "Stave",
            "email": "kstave5@google.it",
            "gender": "Non-binary",
            "gross_salary": 10000,
            "designation": "Registered Nurse",
            "working_days": 20
        },
        {
            "id": "4d473898-8a72-440c-a10b-c26d6f19095b",
            "first_name": "Nikki",
            "last_name": "Pick",
            "email": "npick6@unc.edu",
            "gender": "Non-binary",
            "gross_salary": 10000,
            "designation": "Nurse Practicioner",
            "working_days": 19
        },
        {
            "id": "aca580bd-b226-4239-8adc-dc97b04773e4",
            "first_name": "Guillema",
            "last_name": "Glide",
            "email": "gglide7@imgur.com",
            "gender": "Bigender",
            "gross_salary": 10000,
            "designation": "Environmental Specialist",
            "working_days": 21
        },
        {
            "id": "7512c9c9-58d4-4b89-9b39-124147f7a2a9",
            "first_name": "Robinette",
            "last_name": "Minnis",
            "email": "rminnis8@google.nl",
            "gender": "Female",
            "gross_salary": 10000,
            "designation": "Financial Advisor",
            "working_days": 16
        },
        {
            "id": "3e788515-f688-451d-b711-37c890aee01c",
            "first_name": "Brooks",
            "last_name": "McTrustie",
            "email": "bmctrustie9@jimdo.com",
            "gender": "Non-binary",
            "gross_salary": 10000,
            "designation": "Payment Adjustment Coordinator",
            "working_days": 20
        }
    ]
    res.json(events)
  });

  router.post('/insert', (req,res) => {
    var user=new User();
   user.name=req.body.name;
   user.add=req.body.add;
   user.mobile=req.body.mobile;
   user.city=req.body.city;
   user.college=req.body.college;
   console.log(user.name);
    user.save((err,docs)=>
    {
     if(!err)
     {
      return res.send(docs);
                // console.log(docs);
     }
     else{
       console.log("error");

     }
    })
  });

    // router.get('/read',(req,res)=>{
    //   user.find({}).exec(function(err,user)
    //   {
    //     if(!err)
    //     {
    //       res.json(User);
    //     }
    //     else{
    //       console.log("error");
    //     }
    //   })
    // });

    
   
   

     
  
   
module.exports = router;
