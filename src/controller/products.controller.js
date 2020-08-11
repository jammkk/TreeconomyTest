let _productsService=null
class productsController{
    constructor({productsService}){
        _productsService=productsService
    }
    async get(req,res){
        const {productsId}=req.params
        const products = await _productsService.get(productsId)
        return res.send(products)
        
    }
    async getAll(req,res){
        const products = await _productsService.getAll()

        return res.send(products)
    }
    async delete(req,res){
        const {productsId}=req.params
        const products = await _productsService.delete(productsId)
        return res.send(products)
    }
    async update(req,res){
        const body=req.body
        const {productsId}=body
        const products = await _productsService.update(body,productsId)
        return res.send(products)
    }

    async update(req,res){
     
        const body=req.body
        const productsId=req.params._id
        const products = await _productsService.update(body,productsId)
        return res.send(products)
    }

    
}
module.exports=productsController
