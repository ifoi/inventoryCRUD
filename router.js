const express = require("express");
const route = express.Router() ;

// set the routes for the app . .

app.get("/" , (req, res)=>{
    res.send("Inventory Application")
})


app.get("/add-product" , (req, res)=>{
    res.send("Add product")
})

app.get("/update-product" , (req, res)=>{
    res.send("update product")
})

module.exports = route 