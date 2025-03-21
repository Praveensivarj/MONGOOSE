const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.status(200).json({
        success: true,
        code: 200,
        message: "Hello from Node API"
    })
});

router.get('/movies', (req,res)=>{

});

router.post('/movies', (req,res)=>{

});

router.put('/movies/:id', (req,res)=>{

}); 

router.delete('/movies/:id', (req,res)=>{

});