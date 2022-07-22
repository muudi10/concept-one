const express = require("express");
const router = express.Router() 

    
   
    router.get("/", (req, res) => {
      res.json(1);
    });
    router.get("/function2", (req, res) => {
      res.json(2);
    });
    router.post('/function3', (req, res)=>{
      res.status(200).json(req.body)
    })

    module.exports =router