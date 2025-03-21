const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({
        success: true,
        code: 200,
        message: "Hello from Node API"
    })
});

const port = 3000;
app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is running on http://localhost:${port}`);
    }
});