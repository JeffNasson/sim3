const express = require('express');
const massive = require('massive');

require('dotenv').config();

const app=express();

massive({
    host:'ec2-54-235-212-58.compute-1.amazonaws.com',
    database:'d3rkrkfls8dp9s',
    user:'mkgtedefwdxsnu',
    password:'387667cd7714e2762b8fd896e39f22517baf95c097cb0670c36406cebdab2b0e',
    port:5432,
    ssl:true
}).then(function(db){
    app.set('db',db);
})


const port = 4000
app.listen(port,()=>{
    console.log(`Server listening hard to port ${port} Mr.Bond`)
})