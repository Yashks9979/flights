
const {AirportService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');

async function createAirport(req,res){
    try {
      
        const airport=await AirportService.createAirport({
               name:req.body.name,
               code:req.body.code,
               address:req.body.address,
               cityId:req.body.cityId
        });
        SuccessResponse.data=airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
   
async function getAirports(req,res){
    try {
        const airports=await AirportService.getAirports();
        SuccessResponse.data=airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

//api  structure localhost:3000/api/v1/airplanes/:id
async function getAirport(req,res){
    try {
        const airport=await AirportService.getAirport(req.params.id);
        console.log(airport);
        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

//api  structure DELETE localhost:3000/api/v1/airplanes/:id
async function destroyAirport(req,res){
    try {
        const airport=await AirportService.destroyAirport(req.params.id);
        console.log(airport);
        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}


async function updateAirport(req,res){
    try {
         const airport=await AirportService.updateAirport(req.params.id,req.body);
         SuccessResponse.data=airport;
         return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.StatusCodes || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}