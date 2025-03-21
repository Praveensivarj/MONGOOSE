const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({
        success: true,
        code: 200,
        message: "Hello from Node API"
    })
});

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on port");
    }
});