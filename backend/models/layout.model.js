const mongoose = require("mongoose");
const layoutscgema = new mongoose.Schema({
  layout: {
    type: String,
    enum: ["stack", "grid", "corousel"],
  },
  button: {
    fill: {
      type: String,
      enum: ["1", "2", "3"],
    },
    outline: {
      type: String,
      enum: ["1", "2", "3"],
    },
    hardshadow: {
      type: String,
      enum: ["1", "2", "3"],
    },
    softshadow: {
      type: String,
      enum: ["1", "2", "3"],
    },
    special: {
      type: String,
      enum: ["1", "2", "3", "4", "5", "6"],
    },
  },
  button: {
    type: String,
  },
  button_text: {
    type: String,
  },
  font: {
    type: String,
  },
  fontcolor: {
    type: String,
  },
  themes: {
    type: String,
    enum: [
      "Air Snow",
      "Air Gray",
      "Air Smoke",
      "Air Black",
      "Mineral Blue",
      "Mineral Green",
      "Mineral Orange",
    ],
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Layout = mongoose.model("Layout", layoutscgema);
module.exports = Layout;
