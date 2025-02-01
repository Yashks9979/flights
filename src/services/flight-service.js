const {StatusCodes}=require('http-status-codes');
const {FlightRepository}=require('../repository');
const AppError=require('../utils/errors/app-error');
const {Op}=require('sequelize');
const flightRepository=new FlightRepository();

async function createFlight(data){
    try {
       
        const flight=await flightRepository.create(data);
        return flight;
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

        if (error.name === 'SequelizeDatabaseError') {
            console.log("Sequelize Database Error:", error.message);
            throw new AppError(`Database Error: ${error.message}`, StatusCodes.BAD_REQUEST);
        }

        if(error.name=='SequelizeForeignKeyConstraintError'){
            console.log("Sequelize Database Error:", error.message);
            throw new AppError(`Database Error: ${error.message}`, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('cannot create a new Flight object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query){
    let customFilter={};
    let sortFilter=[];
    const endingTripTime=" 23:59:00"; //but why added this?????
    //trips MUM-DEL
   if(query.trips){
      [departureAirportId,arrivalAirportId]=query.trips.split('-');
      customFilter.departureAirportId=departureAirportId;
      customFilter.arrivalAirportId=arrivalAirportId;
      //todo:add check that they are not same>>
   }
   if(query.price){
    [minPrice,maxPrice]=query.price.split('-');
      customFilter.price={
        [Op.between]:[((minPrice==undefined)?0:minPrice),((maxPrice==undefined)?20000:maxPrice)]
      }
   }
  if(query.travellers){
    customFilter.totalSeats={
        [Op.gte]:query.travellers
    }
  }
     if(query.tripDate){
        customFilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+endingTripTime]
        }
     }
//NOT UNDERSTAND ASSOCIATION  IN THIS PROJECT TILL NOW>>>>
     if(query.sort){
        const params=query.sort.split(',');
        const sortFilters=params.map((param)=>param.split('_'));
        console.log(sortFilters);
         sortFilter=sortFilters;
     }
      try {
        const flights=await flightRepository.getAllFlights(customFilter,sortFilter);
        return flights;
      } catch (error) {
        throw new AppError('Cannot fetch data of all the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
      }
   
}
module.exports={
    createFlight,
    getAllFlights
}