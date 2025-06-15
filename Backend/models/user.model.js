const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    select: false,
  },

  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],

  taskCount: {
    NewTask: { type: Number, default: 0 },
    Active: { type: Number, default: 0 },
    Completed: { type: Number, default: 0 },
    Failed: { type: Number, default: 0 },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//for generating authetication token usingn jwt:
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};
// using bcrypt hashPassword:
userSchema.statics.hashPassword = async function (password) {
  // Generate salt with 10 rounds
  const salt = await bcrypt.genSalt(10);

  // Hash the password with the generated salt
  return await bcrypt.hash(password, salt);
};

//using bcyrypt compare password with hashPassword:
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const user = mongoose.model("User", userSchema);

module.exports = user;
