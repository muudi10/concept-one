const express = require("express");
const router = express.Router() 

    
   
    router.get("/", (req, res) => {
      res.json('Iam working ');
    });
 
    router.post('/function3', (req, res)=>{
      res.status(200).json(req.body)
    })

    module.exports =router