'use strict';
const ENUM=require('../utils/common/enum');
const {BUSINESS,ECONOMY,PERMIUM_ECONOMY,FIRST_CLASS}=ENUM.SEAT_TYPE;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats',[
      {
         airplaneId:2,
         row:1,
         col:'A',
         type:ECONOMY,
         createdAt:new Date(),
         updatedAt:new Date(),
      },
      {
        airplaneId:2,
        row:1,
        col:'B',
        type:ECONOMY,
        createdAt:new Date(),
        updatedAt:new Date(),
     },
     {
      airplaneId:2,
      row:1,
      col:'C',
      type:ECONOMY,
      createdAt:new Date(),
      updatedAt:new Date(),
   },
   {
    airplaneId:2,
    row:1,
    col:'D',
    type:ECONOMY,
    createdAt:new Date(),
    updatedAt:new Date(),
 },
 {
  airplaneId:2,
  row:1,
  col:'E',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:1,
  col:'F',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:2,
  col:'A',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:2,
  col:'B',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:2,
  col:'C',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:2,
  col:'D',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:2,
  col:'E',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:2,
  col:'F',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:3,
  col:'A',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:3,
  col:'B',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:3,
  col:'C',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:3,
  col:'D',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:3,
  col:'E',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  airplaneId:2,
  row:3,
  col:'F',
  type:ECONOMY,
  createdAt:new Date(),
  updatedAt:new Date(),
},
 
 
 
])
  },

  async down (queryInterface, Sequelize) {
   
  }
};
