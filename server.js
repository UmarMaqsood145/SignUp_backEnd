const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const router = require('./router/router');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.Database_LINK, ()=>{
    console.log('Database Sccessfully Connected');
})

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(port, ()=>{ console.log(`server is running on port ${port}`); })