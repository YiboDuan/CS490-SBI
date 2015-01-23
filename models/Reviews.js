var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  company: String,
  location: String,
  position: String,
  rating: [
  	{ label: 'Technical Knowledge', tech: Number}, 
  	{ env: Number }, 
  	{ benefits: Number }, 
  	{ content: Number }, 
  	{interview: Number }],
  notes: String,
  website: String,
  author: String,
  startDate: Date,
  endDate: Date
});

mongoose.model('Review', ReviewSchema);