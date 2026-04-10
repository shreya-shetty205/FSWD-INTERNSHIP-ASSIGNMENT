const User = require("../models/User");

// ✅ CREATE USER
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Validation
    if (!name || !email || !age) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const user = await User.create({ name, email, age });

    res.status(201).json({
      message: "User created successfully",
      user: user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



// ✅ READ USERS
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      message: "Users fetched successfully",
      count: users.length,
      users: users
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



// ✅ UPDATE USER
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "User updated successfully",
      user: user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



// ✅ DELETE USER
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "User deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};