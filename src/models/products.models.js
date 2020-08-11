const mongoose = require('mongoose')
const {Schema}=mongoose
const {compareSync,hashSync,genSaltSync} = require('bcryptjs')

const productsSchema= new Schema({
    productsname:{type:String,required:true, unique:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, required:true,enum:["ADMIN_ROLE","products_ROLE"]},
    active:{type:Boolean,required:true}
},{
    timestamps:{
        createdAt:true,updatedAt:true
    }
})

//Elimina la contraseña en el envío de información
productsSchema.methods.toJSON= function (){
    let products = this.toObject()
    delete products.password
    return products
}

productsSchema.pre('save',async function(next){
    const products=this
    
    if (!products.isModified('password')){
        return next()
    }
        const salt = genSaltSync(10)
        const hashedpassword=hashSync(products.password,salt)
        products.password=hashedpassword
        next()
    
})
productsSchema.methods.comparePasswords =function(password){
    return compareSync(password,this.password)
}

module.exports= mongoose.model('products',productsSchema)