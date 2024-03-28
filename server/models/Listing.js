const {DataTypes} = require('sequelize');
const sequelize = require("./connect")

const Listing = sequelize.define('Listing', {
    title:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING,
    },
    date:{
        type:DataTypes.DATE
    },
    price:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    },
    tags:{
        type:DataTypes.ENUM,
        values:['hot','ok']
    }
});

module.exports = Listing

