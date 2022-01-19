
//import the mongoose module
const mongoose = require("mongoose");

const {MONGO_URI}  = process.env 

console.log("mongo uri: " + MONGO_URI) ;
// Set up default mongoose connection
const connectDB = async() =>{
   try{
       const connect = await mongoose.connect(MONGO_URI ,{
          useNewUrlParser: true,
           useUnifiedTopology: true
       })

       console.log(`Connected sucessfully to MongoDB: ${connect.connection.host}`)

   }catch(err) {
          console.log(err);
          process.exit(1);
   }

}

//Get the default connection

module.exports = connectDB ;