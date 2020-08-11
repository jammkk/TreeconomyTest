const {Router}=require('express')

module.exports= function({
    productsController
}){
    const router = Router()
    router.get('/:productsId',productsController.get)
    router.get('/',productsController.getAll)
    router.put('/:productsId',productsController.update)
    router.delete('/:productsId',productsController.delete)
    router.post('/',productsController.create)

    return router
}