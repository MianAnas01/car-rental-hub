const express  = require("express")
require('dotenv').config();

const app = express()
const port  = process.env.PORT || 5000
const dbConnection  = require("./db");
const customerRoute = require("./routes/customer.route")


app.use("/api/user", customerRoute)


app.get("/test", (req, res) => {
res.send("server working")

})


app.listen(port, () => console.log(`node server running on port ${port}`) )

dbConnection();