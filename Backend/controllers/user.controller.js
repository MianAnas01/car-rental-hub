// const Rental = require("../models/rental.model");
const bcryptjs = require("bcryptjs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// signup
const userSignup = async (req, res) => {
  try {
    let success = false;
    let user;
    const { firstName, lastName, address, contactNumber, email, password, role } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    if (existingUser) {
      // Update existing user with the new role
      if (role === 'customer') {
        existingUser.isCustomer = true;
      } else if (role=== 'rental') {
        existingUser.isRental = true;
      } else {
        return res.status(400).json({
          success: false,
          message: "Invalid role provided. Please specify 'Customer' or 'Rental'.",
        });
      }
      // Save the updated user
      user = await existingUser.save();
    } else {
      // Create a new user
      const newUser = new User({
        firstName,
        lastName,
        address,
        contactNumber,
        email,
        password: hashedPassword,
        isCustomer: role.toLowerCase() === 'customer',
        isRental: role.toLowerCase() === 'rental',
      });

      // Save the new user
      user = await newUser.save();
    }

    success = true;
    const data = {
      user: {
        id: user.id,
        role: role,
      },
    };

    res.status(201).json({
      success: success,
      message: `${role} created/updated successfully`,
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create/update user",
      error: error.message,
    });
  }
};

// login

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return res.status(404).json({ message: "User not found!" });

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return res.status(401).json({ message: "Wrong credentials!" });

    req.user = validUser;

    // Generate JWT token
    const token = generateToken(validUser._id);

    const { password: pass, ...rest } = validUser._doc;

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    let profileType;
    if (validUser.userType === "customer") {
      profileType = "customer";
    } else if (validUser.userType === "rental") {
      profileType = "rental";
    }

    res.status(200).json({
      profileType,
      ...rest,
      token: token, // Add token to response data
    });
  } catch (error) {
    console.error("Error during user sign-in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//  edit profile

const editProfile = async (req, res) => {
  try {
    // Verify JWT token and extract user ID
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    // Check if the user ID from token matches the ID in the request params
    if (userId !== req.params.id) {
      return res
        .status(401)
        .json({ message: "You can only update your own account!" });
    }

    // Proceed with profile update
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    console.error("Error during profile update:", error);
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    res.status(500).json({ message:"An error occurred while updating the profile. Please try again later.", });
  }
};

module.exports = { userSignup, userLogin, editProfile };
