const {StatusCodes}=require('http-status-codes');
const {AirportRepository}=require('../repository');
const AppError=require('../utils/errors/app-error');


const airportRepository=new AirportRepository();

async function createAirport(data){
    try {
     
        const airport=await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name=='SequelizeValidationError'){
            let explanation=[];
            console.log(error);
             error.errors.forEach((err)=>{
                explanation.push(err.message);
             });
             console.log(explanation);
             throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('cannot create a new airport object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports(){
    try {
        const airports=await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('cannot fetch airports',StatusCodes.BAD_REQUEST);
    }
}

async function getAirport(id){
    try {
        const airport=await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('the airport you requested is not present',error.statusCode);
        }
        throw new AppError('cannot fetch airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destroyAirport(id){
     try {
          const response=await airportRepository.destroy(id);
          return response;
     } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('the airport you requested to delete is not present',error.statusCode);
        }
        throw new AppError('cannot fetch airport',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}

async function updateAirport(id,data){
    try {
        const response=await airportRepository.update(id,data);
        return response;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('the airport you requested to update is not present',error.statusCode);
        }
        throw new AppError('cannot fetch airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}