const mongoose = require("mongoose")
const seaSchema = mongoose.Schema({
name: String,
sizeinkm: {type: Number,
required: true,max:4444444,min:2},
location: {type: String,
required: true,minlength:2,maxlength:456789}
})
module.exports = mongoose.model("sea",seaSchema)