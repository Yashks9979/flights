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

module.exports={
    createCity
}