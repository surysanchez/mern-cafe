const mongoose = require("mongoose");

// Ensure that the Category model is processed by Mongoose
// so that the Item's populate method will work
require("./category");
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
const itemSchema = require("./itemSchema");

module.exports = mongoose.model("Item", itemSchema);
