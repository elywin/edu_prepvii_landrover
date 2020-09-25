const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  content: String,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  answer: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
      },
    },
  ],
  acceptedAnswer: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer",
    },
  },
});

module.exports = mongoose.model("post", postSchema);
