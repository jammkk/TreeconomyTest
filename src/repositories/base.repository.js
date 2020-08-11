
class BaseRepository{
    constructor(model){
        this.model=model
    }
    async get(id){
        const entity=await this.model.findById(id)
        return entity
    }
    async getAll(){

        let colection = await this.model.find();

        let data ={
          colection ,
          total:colection.reduce((prev,current)=>{
                return prev+current.value;
          },0
          )
        }

        return data
    }
    async create(entity){
     
        let ca=null
        ca=await this.model.create(entity)
        console.error(err)
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