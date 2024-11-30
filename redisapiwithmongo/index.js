const express=require("express");
// const redis=require("redis");
const router=require("./routes/blogroute")
const {dbConnect}=require('./config/db.config')
require("dotenv").config();
const app=express();

dbConnect();
app.use('/api',router)
app.listen(4000,()=>{
    console.log("server is started on the port of",4000);

})