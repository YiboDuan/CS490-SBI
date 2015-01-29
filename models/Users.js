var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String
});

mongoose.model('User', UserSchema);