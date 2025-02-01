const {Sequelize}=require('sequelize');
const CrudRepository=require('./crud-repository');
const {Flight,Airplane,Airport}=require('../models')
class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }
      
    async getAllFlights(filters,sort){
        const response=await Flight.findAll({
            where:filters,
            order:sort,
            //simple technique to make joins>>
            include:[
            {
                 model:Airplane,
                 required:true,
                as:'airplaneDetails'//if we want to use alias then we have to give it to model file as well
                                     //then only we able to use it>>> 
            },
            {
                model:Airport,
                required:true,
                //both alias in model file and repository file should be same else it will give error>>
                //to be safe don't give any alias you will feel relax>>but it's pretty easy>>
                as:'departureAirport',
                on:{
                      //this is use to add join based on custom column>>>
                      col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"),"=",Sequelize.col("departureAirport.code"))
                }
            },
            {
                model:Airport,
                required:true,
                as:'arrivalAirport',
                on:{//why Flight not FLights>>>???
                      col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=",Sequelize.col("arrivalAirport.code"))
                }
            }
        ]
        });
        return response;
    }
}

module.exports=FlightRepository;