const express=require("express");
const app=express();
const User=require("./routes/userRoute")
const cors=require("cors")
//to parse the json data
app.use(express.json());
app.use(cors())
app.use("/api/v1/",User)

module.exports=app;
