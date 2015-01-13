var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  name: String,
  desc: String,
  activity: String
  //upvotes: {type: Number, default: 0},
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Event', EventSchema);