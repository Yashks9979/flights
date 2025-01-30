const express=require('express');

const router=express.Router();
const airplaneRoutes=require('./airplane-routes');
const {infoController}=require('../../controllers/index')
router.use('/airplanes',airplaneRoutes);
router.get('/info',infoController.info);

module.exports=router;