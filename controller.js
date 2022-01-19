const productdb = require("./model") ;

// create and save new product 

 exports.create = (res, req)=>{
    
    if(!req.body) {
        res.status(400).send({ message: "Name, and quantity required"});
        return;
    }
 
    // add new product
     const product = new productdb({
         name: req.body.name,
         qty: body.qty,
         description: req.body.description
     })

     //save product to database
      product.save(product)
             .then(data => {

             })
             .catch(err =>{
                 res.status(500).send({
                     message: err.message
                 });
             })   
    
}

//Edit by product id
exports.update = (req,res)=>{

    res.send(" show one product") ;

}

//find product 
exports.find = (req,res)=>{
   
    res.send("list products function") ; 
}
 
//Delete product by id
exports.delete = (req,res)=>{

    res.send("delete function") ;
}
 