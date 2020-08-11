const BaseService = require('./base.service')
_productsRepository=null

class productsService extends BaseService{
    constructor({
        productsRepository
    }){
        super(productsRepository)
        _productsRepository=productsRepository
    }
    async getproductsByproductsname(productsname){
        return await _productsRepository.getproductsByproductsname(productsname)
    }
}

module.exports=productsService