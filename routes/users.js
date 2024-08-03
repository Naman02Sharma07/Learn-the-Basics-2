const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/end2");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  discription: String,
  categories: {//this is the way by which i create the array of datadield
    type:Array,
    default: []
  },
  datecreated: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("user",userSchema);