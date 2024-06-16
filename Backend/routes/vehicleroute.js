const express = require("express");
const {uploadVehicle} = require("../controllers/vehicle.controller") 
const router = express.Router();

app.post('/uploadvihicle', upload.single('image'), uploadVehicle);



module.exports = router;