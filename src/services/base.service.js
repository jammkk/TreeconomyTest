class BaseService{
    constructor(repository){
        this.repository=repository
    }
    
    async get(id){
        if(!id) {
            const error = new Error()
            error.status=400
            error.message="Id must be send"
            throw error
        }  

        const currentlyEntity= await this.repository.get(id)
        if(!id) {
            const error = new Error()
            error.status=400
            error.message="Id must be send"
            throw error
        }
        return currentlyEntity  
    }

    async getAll(){
        const currentlyEntity= await this.repository.getAll()
        return currentlyEntity  
    }
    async create(entity){ 
        
        let newEntity=null
        newEntity= await this.repository.create(entity)
        return newEntity  
    }
    async delete(id){
        if(!id) {
            const error = new Error()
            error.status=400
            error.message="Id must be send"
            throw error
        }  
        return  await this.repository.delete(id)
    }

    async update(entity,id){
        
        
        if(!id) {
            const error = new Error()
            error.status=400
            error.message="Id must be send"
            throw error
        }  
        const currentlyEntity= await this.repository.update(id,entity)
        if(!id) {
            const error = new Error()
            error.status=400
            error.message="Id must be send"
            throw error
        }
        return currentlyEntity  
    }
}

module.exports=BaseService