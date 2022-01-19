const mongoose = require("mongoose");

const schema = new mongoose.Schema({
      name: {
          type: String,
          reuired: true
        }, 
    
        qty: { 
          type: Number,
          default: 0
        },

        description: String ,        

})

const productdb = mongoose.model('products', schema) ;

module.exports= productdb ;