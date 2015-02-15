var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
});

mongoose.model('Profile', ProfileSchema);