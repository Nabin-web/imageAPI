const mongoose = require("mongoose");

const image = mongoose.model("Images", {
  image: {
    type: [String],
  },
});

module.exports = image;
