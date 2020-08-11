
class BaseRepository{
    constructor(model){
        this.model=model
    }
    async get(id){
        const entity=await this.model.findById(id)
        return entity
    }
    async getAll(){

        let data ={
          coleccion:  await this.model.find(),
          total:await this.model.find().count()
        }

        return data
    }
    async create(entity){
     
        let ca=null
        try{
        
         ca=await this.model.create(entity)
      
        }catch(err){
            console.error(err)
        }  
        return ca
    }
    
    async update(id,entity){
        
        let updated=await this.model.findByIdAndUpdate(id,entity,{new:true})        
        return updated
    }
    async delete(id,entity){
      
        return await this.model.findByIdAndUpdate(id,{active:false},{new:true})
    }
}

module.exports=BaseRepository