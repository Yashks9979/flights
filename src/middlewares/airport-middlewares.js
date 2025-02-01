const {StatusCodes}=require('http-status-codes');

const {ErrorResponse}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message='something went wrong while creating airport';
        ErrorResponse.error=new AppError(['name was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.code){
        ErrorResponse.message='something went wrong while creating airport';
        ErrorResponse.error=new AppError(['code was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.cityId){
        ErrorResponse.message='something went wrong while creating airport';
        ErrorResponse.error=new AppError(['cityId was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports={
    validateCreateRequest
}