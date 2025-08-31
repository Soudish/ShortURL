const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timestamp: {  // use lowercase 'timestamp' consistently
        type: Number,
      }
    }
  ]
}, { timestamps: true });

const URL = mongoose.model('Url', urlSchema);  // model name capitalized
module.exports = URL;
