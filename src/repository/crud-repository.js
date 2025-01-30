const {Logger}=require('../config/logger-config');

class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
           // console.log(this.model); ->this coming out to be undefined>>>
            const response=await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error('something went wrong in the crud repo :create function');
            throw error;
        }
    }

    async destroy(data){
        try {
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error('something went wrong in crud repo:destroy function');
            throw error;    
        }
    }

    async get(data){
        try {
            const response=await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error('something went wrong in crud repo:get function');
            throw error;
        }
    }

    async getAll(data){
        try {
            const response=await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('something went wrong in crud repo:getAll function');
            throw error;
        }
    }

    async update(id,data){//data should be object to be get updated>>{col->value,.....}
        try {
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            Logger.error('something went wrong in crud repo:getAll function');
            throw error;
        }
    }
}

module.exports=CrudRepository;