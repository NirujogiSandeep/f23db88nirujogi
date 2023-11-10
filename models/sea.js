const mongoose = require("mongoose")
const seaSchema = mongoose.Schema({
name: String,
sizeinkm: Number,
location: String
})
module.exports = mongoose.model("sea",seaSchema)