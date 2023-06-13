const express=require("express");
const app=express();
const User=require("./routes/userRoute")
const Book=require("./routes/bookRoute")

const cors=require("cors")
//to parse the json data
app.use(express.json());
app.use(cors())
app.use("/api/v1/",User)
app.use("/api/v1/",Book)

module.exports=app;
