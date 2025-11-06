// console.log("hello")

const  express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.listen(5100, (err) => {n
    if (err) console.log(err)
    else console.log(5100)
})
