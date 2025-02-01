const express=require('express');

const {AirportController}=require('../../controllers');
const {AirportMiddlewares}=require('../../middlewares');


const router=express.Router();


router.patch('/:id',AirportController.updateAirport);
router.delete('/:id',AirportController.destroyAirport);
router.get('/:id',AirportController.getAirport);
router.get('/',AirportController.getAirports);
router.post('/',AirportMiddlewares.validateCreateRequest,AirportController.createAirport);

module.exports=router;