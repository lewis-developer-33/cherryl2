const sequelize = require("./connect")

const User = require("./User")
const Listing = require("./Listing")
const Message = require("./Message")
const Review = require("./Review")
const Booking = require("./Booking")

User.hasMany(Listing)
Listing.belongsTo(User)

User.hasMany(Message)
Message.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

User.hasMany(Booking)
Booking.belongsTo(User)

Listing.hasMany(Review)
Review.belongsTo(Listing)



const synchroModels = async () => {
    try {
        await sequelize.sync({force:true})
    } catch (error) {
        console.log(error.message)
    }
}

synchroModels()

