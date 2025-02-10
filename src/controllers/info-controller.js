const {StatusCodes}=require('http-status-codes');
const info=(req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message:'api is live from flight',
        error:{},
        data:{}
    });
}

module.exports={
    info
}