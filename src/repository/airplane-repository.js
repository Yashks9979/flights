const CrudRepository=require('./crud-repository');

const {airplane}=require('../models/airplane');

class AirplaneRepository extends CrudRepository{
    constructor(){
        console.log("Airplane Model:", airplane);
        super(airplane);
    }

}

module.exports=AirplaneRepository;