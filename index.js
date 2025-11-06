// console.log("hello")

const  express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.get("/home",(req,res)=>{
    res.send("Home page")
})

app.listen(5100, (err) => {
    if (err) console.log(err)
    else console.log(5100)
})
