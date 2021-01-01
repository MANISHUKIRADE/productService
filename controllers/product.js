const productService = require('../services/product');
const _ = require('lodash');
const { validateParams } = require('./utilties')
const saveProductController = async(req,res)=>{
    if(_.isNull(req.body.product)){
        return res.status(400).send('product object is not provided');
    } 
    let product = req.body.product;
    var checkParams =  validateParams(product, ['name','desc'])  
    if(!checkParams.valid){
        return res.status(400).send('params error',checkParams.param)
    }   
    try{
      var result = await  productService.saveProduct(product.name,product.desc,product.date,product.categories);
      res.status(200).send(result);
    }  catch(err){
      res.status(500).send(err);
      console.error('error product controller',err)    
    }
}
module.exports = {
    saveProductController :saveProductController
}