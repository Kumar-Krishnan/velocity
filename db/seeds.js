require('dotenv').config()
const mongoose = require('mongoose')

const UserModel = require('./models/User')
const QuoteModel = require('./models/Quote')
const ValueModel = require('./models/Value')


mongoose.connect(process.env.MONGODB_URI)

UserModel.remove({})
    .then(()=>{

        const value1 = new ValueModel({
            text: "An investment in knowledge pays the best interest.",
            author: "Benjamin Franklin"
        })

        const value2 = new ValueModel({
            text: "An investment in war pays the best interest.",
            author: "Sun Tsu"
        })

        const quote1 = new QuoteModel({
            text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
            author: "Thomas Edison"
        })

        console.log(quote1)


        const quote2 = new QuoteModel({
            text: `Many of life's failures are people who drank IPAs`,
            author: "Kumar Krishnan"
        })

        const user1  = new UserModel({
            name: "Kumar Krishnan",
            password: "Whoo",
            quotes: [quote1,quote2],
            tenValues: [value1, value2],
        })

        const user2  = new UserModel({
            name: "Dan Carling",
            password: "WhoHoo",
            quotes: [quote1,quote2],
            tenValues: [value1, value2],
        })

        const users = [user1, user2]

        return UserModel.insertMany(users)
    })
    .then(()=>{
        mongoose.connection.close()
    })


