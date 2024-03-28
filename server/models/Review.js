const {DataTypes} = require('sequelize');
const sequelize = require("./connect")

const Review = sequelize.define('Review', {
    message:{
        type:DataTypes.STRING
    },
    rating:{
        type:DataTypes.STRING,
        unique:true
    }
});

module.exports = Review

