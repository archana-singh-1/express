import express from "express";

const app=express()
app.use(express.urlencoded({extended: true}))

app.get("/",function(req,resp){
    resp.send("hello india")
})

app.post("/sum",function (req,resp){
    const num1=Number(req.body.num1)
    const num2=Number(req.body.num2)
    const sum=num1+num2
    resp.send(`Sum of num1 nad num2 is ${sum}`)

})

app.listen(4000,function(){
    console.log("Server is runnig")
})