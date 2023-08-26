const express=require("express")
const app=express()
const router=require("./Routes/Routes")
const mongoose=require("mongoose")
var url = "mongodb://localhost:27017/MyTuition";

mongoose.connect(url)
const con=mongoose.connection;
con.on("open",function(){
    console.log("connection created")
})
app.use(express.json())
 app.use("/",router)


app.listen(8000)