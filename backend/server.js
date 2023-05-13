require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoute')
const productRouter = require('./routes/productRoute')
const path = require('path');

app.use(express.json())
app.use(cors())

app.use('/users',userRouter)
app.use('/product',productRouter)

const PORT = process.env.PORT
console.log(PORT);
app.listen(PORT,()=>{
    console.log("Server is  running")
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname,"build", "index.html"))
    );
}

const URI = process.env.MONGO_URL
mongoose.set("strictQuery", false);

try{
    mongoose.connect(URI);
    console.log("Databse connected");
} catch(e){
    console.log(e.error);
}
