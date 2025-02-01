const express=require('express');
const airplaneRoutes=require('./airplane-routes');
const {infoController}=require('../../controllers/index');
const cityRoutes=require('./city-routes');
const airportRoutes=require('./airport-routes');
const flightRoutes=require('./flight-routes')
const router=express.Router();

router.use('/flights',flightRoutes);
router.use('/airports',airportRoutes);
router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);
router.get('/info',infoController.info);

module.exports=router;