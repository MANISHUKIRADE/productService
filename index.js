const express = require('express');
const app = express();
const productController = require('./controllers/product') 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json())
app.get('/ping',async(req,res)=>{
   res.status(200).send('pong')
});
app.post('/product',async (req,res)=>{
    try{
        var result = productController.saveProductController(req,res)
    }catch(err){
       console.error(err)
       res.status(500).send('Error While Adding Product',err)
    }
    return result;
});
app.listen(3000)
module.exports = app;