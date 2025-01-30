const {AirplaneService}=require('../services/index');
const {StatusCodes}=require('http-status-codes');


async function createAirplane(req,res){
    try {
        console.log("controller hit")
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        console.log('Service returned:', airplane);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'successfully create an airplane',
            data:airplane,
            error:{}
        });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            message:'something went wrong while creating airplane',
            data:{},
            error:error
        });
    }
}

module.exports={
    createAirplane
}