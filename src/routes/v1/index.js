const express=require('express');
const airplaneRoutes=require('./airplane-routes');
const {infoController}=require('../../controllers/index');

const router=express.Router();



router.use('/airplanes',airplaneRoutes);
router.get('/info',infoController.info);

module.exports=router;