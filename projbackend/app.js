require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");  
const cookieParser = require("cookie-parser");



//My Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./Routes/user");
const categoryRoutes = require("./Routes/category");
const productRoutes = require("./Routes/product");
const orderRoutes = require("./Routes/order");
const paymentBRoutes= require("./Routes/paymentBRoutes");


//DB Connection
 mongoose.connect(process.env.DATABASE,{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true}
    ).then(()=>{console.log("DB CONNECTED")})
    .catch(()=>{console.log("DB CONNECTION UNSUCCESSFUL")})



///Middlewares    
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

///My Routes
app.use("/api", authRoutes)

app.use("/api", userRoutes)

app.use("/api", categoryRoutes)

app.use("/api", productRoutes)

app.use("/api", orderRoutes);

app.use("/api", paymentBRoutes);


const port = process.env.PORT || 8000;

//app.get("/", (req,res) => res.send("Hello"));

app.listen(port,console.log("listening @ port: "+port))
