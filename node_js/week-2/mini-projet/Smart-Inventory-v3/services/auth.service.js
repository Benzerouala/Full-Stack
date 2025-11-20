const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async ({ email, password, role }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({ email, passwordHash, role });

  return user;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throw new Error("Invalid credentials");

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return {
    token,
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  };
};
