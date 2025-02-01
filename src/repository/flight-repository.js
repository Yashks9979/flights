const CrudRepository=require('./crud-repository');
const {Flight}=require('../models')
class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }
      
    async getAllFlights(filters){
        const response=await Flight.findAll({
            where:filters
        });
        return response;
    }
}

module.exports=FlightRepository;