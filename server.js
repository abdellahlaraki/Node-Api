// dotenv
require("dotenv").config();
const express = require("express"); /// express variable and require express package from express
const app = express();
const cors = require('cors')

const domain=process.env.domain;
 var corsOptions = {
   origin: domain, // only this domain acces  rest  api 
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
 }
app.use(cors(corsOptions));
// Using Node.js `require()`
const mongoose = require("mongoose");

// routes
const ProductRouter = require("./routes/productroute");

//
const errorMiddleware=require("./middleware/errorMiddleware");



// middleware so our app can undarstand json
app.use(express.json());
//
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/product", ProductRouter);
// 
app.use(errorMiddleware);

// env
const Mongodb_URL = process.env.Mongodb_URL;
const port = process.env.Port || 3000;

//connect mongodb
mongoose
  .connect(`${Mongodb_URL}`)
  .then(() => {
    console.log("connected");
    app.listen(port, () => {
      // listen to port 3000
      console.log("node api"); // what will listen to
    });
  })
  .catch((error) => console.log(error));
