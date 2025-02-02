const {Sequelize}=require('sequelize');
const CrudRepository=require('./crud-repository');
const {Flight,Airplane,Airport,City}=require('../models');
const db=require('../models');
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
                },
                include:{
                    model:City,
                    required:true
                }
            },
            {
                model:Airport,
                required:true,
                as:'arrivalAirport',
                on:{//why Flight not FLights>>>???
                      col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=",Sequelize.col("arrivalAirport.code"))
                },
                include:{
                    model:City,
                    required:true
                }
            }
        ]
        });
        return response;
    }

    async updatedRemainingSeats(flightId,seats,dec){
        await db.sequelize.query(`SELECT * FROM flights WHERE flights.id=${flightId} FOR UPDATE;`);
        const flight=await Flight.findByPk(flightId);//first we have to fetch flight object
        if(parseInt(dec)){
            await flight.decrement('totalSeats',{by:seats});//then we will call decrement and increment on that object
        }
        else{
           await flight.increment('totalSeats',{by:seats});//it just incrementing why???
        }
        return flight;
    }
}

module.exports=FlightRepository;