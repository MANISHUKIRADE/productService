const connectionString = "mongodb+srv://mailerv1:Manish9797@cluster0.t8xnq.mongodb.net/prodcutService?retryWrites=true&w=majority";
const mongoose = require('mongoose');

const dbConnection = mongoose.createConnection(connectionString,{useNewUrlParser:true})

module.exports = dbConnection;