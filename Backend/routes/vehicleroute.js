const express = require("express");
const {uploadVehicle, GetVehicles, vehicleNotAvailable,  checkVehicleAvailability} = require("../controllers/vehicle.controller") 
const {upload} = require("../utils/multer")
const router = express.Router();

router.post('/rental/uploadvehicle',  upload.single('images'), uploadVehicle);
router.get('/rental/getvehicle/:id' , GetVehicles)
router.put("/vehiclenotavailable", vehicleNotAvailable)
router.get('/vehicle/checkavailability/:id', checkVehicleAvailability);

module.exports = router;