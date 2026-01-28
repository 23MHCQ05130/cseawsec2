const express=require('express');
const app =express();
app.get("/",(req,res)=>{
    res.send("Welcome to CSE DEPARTMENT from NIHA");
} );
app.listen(3000,()=>{
    console.log("server running successfully");
});