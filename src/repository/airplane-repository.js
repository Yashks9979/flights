const CrudRepository=require('./crud-repository');

const {Airplane}=require('../models/airplane');

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }

}

module.exports=AirplaneRepository;