// user.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  friends: [
    {
      type: [String],
    },
  ],
  groups: [
    {
      type: [String],
    },
  ],
  totalSpendings: {
    type: Number,
    default: 0,
  },
  itemtypes: {
    type: [Number],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
