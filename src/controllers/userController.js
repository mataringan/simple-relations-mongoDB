const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = new User({
      name: name,
      email: email,
    });

    await user.save();

    res.status(201).json({
      status: "success",
      message: "create user success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
