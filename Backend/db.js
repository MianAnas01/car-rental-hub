const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb+srv://admin:admin@real-estate.ydrgzsz.mongodb.net/?retryWrites=true&w=majority&appName=Real-Estate' )

        const connection = mongoose.connection
connection.on('connected', ()=>{
console.log('Mongo DB Connection Successfull')
})
connection.on('error', ()=>{
console.log('Mongo DB Connection Error')
})
}
connectDB()
module.exports = mongoose;