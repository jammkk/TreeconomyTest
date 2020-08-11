const mongoose = require('mongoose')
const {Schema}=mongoose

const productsSchema= new Schema({
    category:{type:String,required:true},
    description:{type:String, required:true},
    identification:{type:String, required:true},
    inidate:{type:String, required:true},
    productname:{type:String, required:true},
    value:{type:Number, required:true},
},{
    timestamps:{
        createdAt:true,updatedAt:true
    }
})

module.exports= mongoose.model('products',productsSchema)