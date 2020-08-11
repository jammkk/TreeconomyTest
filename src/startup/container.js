const {asClass,asFunction,asValue,createContainer} = require('awilix')
//config
const config=require('../config')
const app = require('.')
//Routes
const {productsRoutes,} = require('../routes/index.routes')
const Routes = require('../routes')
//Controllers
const { productsController,}=require('../controller')
//Services
const {productsService,} = require('../services')
//Repositories
const {productsRepository,}= require('../repositories')
//Models
const {productsModel, } =require('../models')

const container= createContainer()

container.register({
    router:asFunction(Routes).singleton(),
    app:asClass(app).singleton(),
    config:asValue(config)
})
//Registering the models
.register({
    productsModel:asValue(productsModel),
})
//Registering the Services
.register({
    productsService:asClass(productsService).singleton(),
})
//Registering the Repositories
.register({
    productsRepository:asClass(productsRepository).singleton(),
})
.register({
    productsRoutes:asFunction(productsRoutes).singleton(),
})
.register({
    productsController:asClass(productsController.bind(productsController)).singleton(),
})

module.exports=container