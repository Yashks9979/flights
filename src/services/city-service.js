const {StatusCodes}=require('http-status-codes');

const {CityRepository}=require('../repository');
const AppError=require('../utils/errors/app-error');

const cityRepository=new CityRepository();

async function createCity(data){
    try {
        const city=await cityRepository.create(data);
        return city;
    } catch (error) {
        if(error.name=='SequelizeUniqueConstraintError' || error.name=='SequelizeValidationError'){
            let explanation=[];
            console.log(error);
             error.errors.forEach((err)=>{
                explanation.push(err.message);
             });
             console.log(explanation);
             throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR);
        console.log(error);
    }
}
async function destroyCity(id){
     try {
        const city=await cityRepository.destroy(id);
        return city;
     } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('the city you requested to delete is not present',error.statusCode);
        }
        throw new AppError('cannot fetch city',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}

async function updateCity(id,data){
     try {
        const city=await cityRepository.update(id,data);
        return city;
     } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('the city you requested to update is not present',error.statusCode);
        }
        throw new AppError('cannot fetch city',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}
module.exports={
    createCity,
    destroyCity,
    updateCity
}