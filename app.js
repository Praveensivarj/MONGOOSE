const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/router');

app.use('/movies', router);

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server is running on http://localhost:${port}`);
    }
});