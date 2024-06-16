const express = require("express");
const {uploadVehicle} = require("../controllers/vehicle.controller") 
const router = express.Router();

router.post('/uploadvihicle', 
    // upload.single('image'),
     uploadVehicle);



module.exports = router;