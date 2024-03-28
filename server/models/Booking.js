const {DataTypes} = require('sequelize');
const sequelize = require("./connect")

const Booking = sequelize.define('Booking', {
    name:{
        type:DataTypes.STRING
    },
});

module.exports = Booking

