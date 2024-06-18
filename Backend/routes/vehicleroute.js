const express = require("express");
const {uploadVehicle, GetVehicles} = require("../controllers/vehicle.controller") 
const {upload} = require("../utils/multer")
const router = express.Router();

router.post('/rental/uploadvihicle',  upload.single('images'), uploadVehicle);

router.get('/rental/vehicles' , GetVehicles)

module.exports = router;