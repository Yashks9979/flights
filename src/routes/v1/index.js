const express=require('express');
const airplaneRoutes=require('./airplane-routes');
const {infoController}=require('../../controllers/index');
const cityRoutes=require('./city-routes');
const router=express.Router();



router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes)
router.get('/info',infoController.info);

module.exports=router;