const express = require('express');
require('dotenv').config();
const paintingRoutes = require('./routes/painting');

const app = express();


app.use((req,res,next)=> {
    console.log(req.path, req.method);
    next();
});

app.use('/painting', paintingRoutes);



app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000");
});