const express = require("express")
const cors = require("cors")

const User = require("./models/User")
const Listing = require("./models/Listing")
const Review = require("./models/Review")
const Booking = require("./models/Booking")

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

const port = 8000
const app = express()

app.use(cors())
app.use(express.json())

app.listen(port,() => {
    console.log(`Server running on port :${port}`)
})

// Authentication
app.post('/sign-up',async (req,res) => {
    try {
        const {name,email,phone,password} = req.body
        await User.create({
            name,
            email,
            phone,
            password
        })
        res.json({message:"Successful sign up"})
    } catch (error) {
        console.log(error.message)      
        res.json({error:error.message})
    }
})

app.post('/log-in',async (req,res) => {
    try {
        const {email,password} = req.body
        const userFound = await User.findOne({where:{email}})
        if (userFound.password == password){
            res.json({message:"Successful log in"})
        }
        else res.json({error:"User details are wrong"})
    } catch (error) {
        console.log(error.message)      
        res.json({error:error.message})
    }
})


// Listing
app.get('/listing',async (req,res) => {
    try {
        const listings = await Listing.findAll()
        res.json({message:listings})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

app.post('/listing',async (req,res) => {
    try {
        const {title,description,date,price,image,tags} = req.body
        await Listing.create({
            title,
            description,
            date,
            price,
            image,
            tags
        })
        res.json({message:"Successful listing created"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

app.put('/listing',async (req,res) => {
    try {
        const {title,description,date,price,image,tags} = req.body
        const listingFound = await Listing.findOne({where:{title}})
        
        const updatedListing = {
            description:description == null ? listingFound.description : description,
            date:date == null ? listingFound.date : date,
            price:price == null ? listingFound.price : price,
            image:image == null ? listingFound.image : image,
            tags:tags == null ? listingFound.tags : tags,
        }

        await Listing.update(updatedListing,{where:{title}})
        res.json({message:"Successful listing updated"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

app.delete('/listing/:id',async (req,res) => {
    try {
        const {id} = req.params
        
        await Listing.destroy({where:{id}})
        res.json({message:"Successful listing deleted"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

// Review
app.get('/review',async (req,res) => {
    try {
        const reviews = await Review.findAll()
        res.json({message:reviews})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

app.post('/review',async (req,res) => {
    try {
        const {message,rating,email,title} = req.body
        const userFound = User.findOne({where:{email}})
        const listingFound = Listing.findOne({where:{title}})
        await Review.create({
            message,
            rating,
            UserId:userFound,
            ListingId:listingFound

        })
        res.json({message:"Review created"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

app.delete('/review/:id',async (req,res) => {
    try {
        const {id} = req.params
        await Review.destroy({id})
        res.json({message:"Review deleted"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

// Booking
app.get('/booking',async (req,res) => {
    try {
        const bookings = await Booking.findAll()
        res.json({message:bookings})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

app.post('/booking',async (req,res) => {
    try {
        const {email,title} = req.body
        const userFound = User.findOne({where:{email}})
        const listingFound = Listing.findOne({where:{title}})
        await Booking.create({
            UserId:userFound,
            ListingId:listingFound
        })
        res.json({message:"Booking created"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

app.delete('/booking/:id',async (req,res) => {
    try {
        const {id} = req.params
        await Booking.destroy({id})
        res.json({message:"Review deleted"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

// User
app.get("/users",async(req,res) => {
    try {
        const users = await User.findAll()
        res.json({message:users})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})
app.put("/users",async(req,res) => {
    try {
        const {role,email} = req.body
        await User.update({role},{where:{email}})
        res.json({message:"User role updated"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})
app.delete("/users/:id",async(req,res) => {
    try {
        const {id} = req.params
        await User.destroy({where:{id}})
        res.json({message:"User deleted"})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})

// Guides
app.post("assign",async(req,res) => {
    try {
        const {title,email} = req.body
        const userFound = await User.findOne({where:{email}})
        await Listing.update({UserId:userFound},{where:{title}})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
})