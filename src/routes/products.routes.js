const {Router}=require('express')
const {AuthMiddleware} = require('../middlewares')
const fileUpload = require('express-fileupload')


module.exports= function({
    productsController
}){
    const router = Router()
    router.use(fileUpload())
    router.get('/:productsId',productsController.get)
    router.get('/',productsController.getAll)
    router.patch('/:_id',productsController.update)
    router.delete('/:productsId',productsController.delete)
    router.post('/',productsController.create)

    return router
}