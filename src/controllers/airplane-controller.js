
const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');

async function createAirplane(req,res){
    try {
      
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
   
async function getAirplanes(req,res){
    try {
        const airplane=await AirplaneService.getAirplanes();
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

//api  structure localhost:3000/api/v1/airplanes/:id
async function getAirplane(req,res){
    try {
        const airplane=await AirplaneService.getAirplane(req.params.id);
        console.log(airplane);
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplane
}