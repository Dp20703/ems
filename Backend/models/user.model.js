const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const taskSchmea = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task name is required."],
    trim: true,
    minlength: [3, "Task name must be at least 3 characters long."],
    maxlength: [20, "Task name cannot be more than 20 characters long."],
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  newTask: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  failed: {
    type: Boolean,
    default: false,
  },
});

const userSchema = new mongoose.Schema({
  //   profilePic: {
  //     type: String,
  //   },
  firstName: {
    type: String,
    required: [true, "firstName is required."],
    trim: true,
    // minlength: [3, "firstName must be at least 3 characters long."],
    // maxlength: [20, "firstName cannot be more than 20 characters long."],
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
    // minlength: [6, "Password must be at least 6 characters long."],
    select: false,
  },

  tasks: [
    {
      type: [taskSchmea],
      default: [],
    },
  ],
  taskCount: [
    {
      NewTask: {
        type: Number,
        default: 0,
      },
      Active: {
        type: Number,
        default: 0,
      },
      Completed: {
        type: Number,
        default: 0,
      },
      Failed: {
        type: Number,
        default: 0,
      },
    },
  ],
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

const user = mongoose.model("user", userSchema);

module.exports = user;
