const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchem = new Schema({
  username: String,
  password: String,
  token: String
})

module.exports = mongoose.model('User', UserSchem);
