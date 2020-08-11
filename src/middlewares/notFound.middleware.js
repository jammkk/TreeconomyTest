module.exports =(err,req,res,next)=>
    res.status(404).send({
        status:404,
        message:err.message||'Resource not found'
    })
