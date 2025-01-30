const {AirplaneRepository}=require('../repository');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try {
        console.log(data);
        console.log('hello from service')
        const airplane=await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports={
    createAirplane,
}