const User = require("../models/user.model");
const userLogin = async (req, res) => {
  try {
    let Success = false;
    const newCustomer = await Customer.create({
      email: req.body.email,
      password: req.body.password,
    });
    Success = true;
    const data = {
      customer: {
        id: newCustomer.id,
        role: "Customer",
      },
    };
    res.status(201).json({
      success: Success,
      message: "Customer created successfully",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create customer",
      error: error.message,
    });
  }
};


module.exports = { userLogin };