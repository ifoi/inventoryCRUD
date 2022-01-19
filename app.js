 const express = require("express") ;
 const bodyParser = require("body-parser");
 const dotenv = require("dotenv");
 const morgan = require("morgan");
 
 const controller = require('./controller')
 
 const app = express();

 // parse request to body parser
 app.use(bodyParser.json()) ;

 const path = require("path") ;

dotenv.config({path: "config.env"})
const PORT = process.env.PORT || 8080  ;

  // log requests
  app.use(morgan("tiny"));

 const connectDB = require("./db");
const { application } = require("express");
 const collection = "inventory" ;

 // Connect to Database
 connectDB(); 

 // set ejs as templating engine
 app.set("view engine", "ejs") 
 
// app.get("/" , (req, res)=>{
//    res.send("Inventory Application")
// })

// setup router

// /* 
app.get("/" , (req, res)=>{
    res.send("Inventory Application")
})

app.put("/add-product" , (req, res)=>{
    res.send("Add product")
})

app.get("/update-product" , (req, res)=>{
    res.send("update product")
})

app.get("/products" , (req, res)=>{
    res.send("list products")
})

// */

 // app.use("/", require("./router"));

 // API Calls
 app.post("/api/product", controller.create);
 app.put("/api/product/:id", controller.upate);
 app.get("/api/product", controller.find);
 app.delete("/api/product/:id", controller.delete);
 
app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)}) ;
