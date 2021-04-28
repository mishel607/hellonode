const express=require("express")
const morgan=require("morgan")


const app=express();
app.set('view engine','ejs')
app.use(morgan("dev"))

app.use(express.static(__dirname+'/public'));
app.get('/views', function (req, res) {
  res.sendFile(__dirname +'/home.ejs');
})


app.use("/",(req,res)=>{return res.render('home')})


app.use("/ho",(req,res)=>{return res.send("welcome to  node !!!")})
app.use("/lag",(req,res)=>{return res.send("welcome to  lag !!!")})

const PORT=process.env.PORT|| 8081;
app.listen(PORT,()=>{
    console.log(`Server is running on port localhost:${PORT}`);
}) 