const {StatusCodes}=require('http-status-codes');
const validateTime=require('../utils/helper/dateTime-helper');
const {ErrorResponse}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(req.body.departureAirportId===req.body.arrivalAirportId){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['departure airport and arrival airport cannot be same'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(req.body.arrivalTime && req.body.departureTime){
    const isValidTime = validateTime(req.body.arrivalTime, req.body.departureTime);
    if(!isValidTime){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['departure time is more than arrival time'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

    if(!req.body.flightNumber){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['flightNumber was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.airplaneId){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['airplaneId was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.departureAirportId){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['departureAirportId was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['arrivalAirportId was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['arrivalTime was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['departureTime was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['price was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message='something went wrong while creating Flights';
        ErrorResponse.error=new AppError(['totalSeats was not found in incoming request'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports={
    validateCreateRequest
}