const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  answer: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Answer", answerSchema);
