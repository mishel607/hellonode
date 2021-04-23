const express=require("express")
const morgan=require("morgan")


const app=express();
app.use(morgan("dev"))


app.use("/",(req,res)=>{return res.send("hello !")})
app.use("/home",(req,res)=>{return res.send("welcome to  node !!!")})
app.use("/lag",(req,res)=>{return res.send("welcome to  lag !!!")})

const PORT=8081;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})