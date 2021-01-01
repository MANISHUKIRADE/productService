const Product = require('../models/product');
const _ = require('lodash')
const saveProduct = async (name, desc, date ,categories)=>{
    if(_.isNull(name)){
        throw new Error('Name Of Product Not Provided');
    }
    if(_.isNull(date) && _.isDate(date)){
        throw new Error('Date is Not Provided');
    }
    if(!_.isArray(categories)){
        throw new Error('Provide categories in Array');
    }
     var product = new Product({
         name : name,
         desc : desc,
         date : date ,
         category : categories
     });
     try {
       var result = await product.save()
       console.info('product save :: result',result);
       return result;
     }catch(err){
         console.error('product save :: Error ',err);
         throw err;
     }
}
module.exports = {
    saveProduct : saveProduct
}