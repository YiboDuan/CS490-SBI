var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  company: String,
  location: String,
  rating: Number,
  notes: String
});

mongoose.model('Review', ReviewSchema);