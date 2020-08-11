const BaseRepository= require('./base.repository')
let _products=null

class productsRepository extends BaseRepository{
    constructor({productsModel}){
        super(productsModel)
        _products=productsModel
    }
    
    async getproductsByproductsname(productsname){
        return await _products.findOne({productsname:productsname,active:true})
    }
}

module.exports=productsRepository