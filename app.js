 const express = require("express") ;
 const bodyParser = require("body-parser");
 const dotenv = require("dotenv");
 const app = express();

 // parse request 
 app.use(bodyParser.json()) ;

 const path = require("path") ;

dotenv.config({path: "config.env"})
const PORT = process.env.PORT || 8080  ;


 const connectDB = require("./db");
 const collection = "inventory" ;

 // Connect to Database
 connectDB(); 

 
app.get("/" , (req, res)=>{
    res.send("Inventory Application")
})

app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)}) ;
