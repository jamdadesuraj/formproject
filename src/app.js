const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT||3000;
require("../src/db/conn")
const static_path = path.join(__dirname,"../public");
const temp_path = path.join(__dirname,"../views")
const UserData = require("./models/user")

app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set("view engine","hbs")

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/",(req,res)=>{
    res.send("this is home page")
});


app.post("/", async(req,res)=>{
    try{
        const data = new UserData(req.body)
        const fData = await data.save();
        res.status(201).render("index")
        // console.log(req.body)
    }catch(err){
        res.status(404).send(err)
    }
})

app.listen(port,(req,res)=>{
    console.log("listening on port 3000")
})