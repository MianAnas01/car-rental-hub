const express  = require("express")
require('dotenv').config();
const app = express()
const port  = process.env.PORT || 5000
const dbConnection  = require("./db");
const userRoute = require("./routes/userroute")
const cookieParser = require('cookie-parser');

app.use(express.json());

// Add cookie parsing middleware
app.use(cookieParser());


app.use("/api/user", userRoute)
app.use("/api/vehicle", userRoute)


app.get("/test", (req, res) => {
res.send("server working")

})


app.listen(port, () => console.log(`node server running on port ${port}`) )

dbConnection();