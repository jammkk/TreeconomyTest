const express =require('express')
const cors =require('cors')
const helmet=require('helmet')
const compression= require('compression')
const {ErrorMidleware,NotFoundMiddleware} = require('../middlewares')
require('express-async-errors')

//Inyección de dependencias con User,Auth y las demás rutas
module.exports =function({UserRoutes,AuthRoutes,}){
    const router = express.Router()
    const apiRoutes =  express.Router()
//Uso de los middlewares importados cors(cros-domain), helmet(seguridad) compressión (comprimir las peticiones http) y static para acceder a recursos del servidor

    apiRoutes.use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(express.static(__dirname+"../public"))

    apiRoutes.use('/auth',AuthRoutes)
    apiRoutes.use('/user',UserRoutes)

    router.use('/v1/api',apiRoutes)
 //Uso de los middlewares propios
    router.use(ErrorMidleware)
    router.use(NotFoundMiddleware)

    return router
}