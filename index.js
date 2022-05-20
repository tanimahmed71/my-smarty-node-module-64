const express = require('express');
const app =express()
const cors =require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello from over smarty pant!! with auto resart")
})


const users =[
    {id:1,name:"atik",email:"atikpagle@gmail.com" ,phone:"0176666666"},
    {id:2,name:"rahat",email:"rahat@gmail.com" ,phone:"0176666666"},
    {id:3,name:"tanim",email:"tanim@gmail.com" ,phone:"0176666666"},
    {id:4,name:"tonmoy",email:"tonmoy@gmail.com" ,phone:"0176666666"},
    {id:5,name:"raju",email:"raju@gmail.com" ,phone:"0176666666"},
    {id:7,name:"taki",email:"taki@gmail.com" ,phone:"0176666666"},

]

app.get("/user",(req,res)=>{
    if(req.query.name){
        const search =req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else
    {
    res.send(users)
    }
})

app.get("/user/:id",(req,res)=>{
    console.log(req.params);
    const id=parseInt(req.params.id);
    const user =users.find(u=>u.id ===id);

    res.send(user);
})

app.post("/user",(req,res)=>{
    // console.log("request",req.body);
    const user =req.body;
    user.id =users.length+1;
    res.send(user);
})

app.get("/fruits",(req,res)=>{
    res.send(["mango","apple","grabs","banana"]);
})
app.listen(port,()=>{
    console.log('listening to port',port);
})