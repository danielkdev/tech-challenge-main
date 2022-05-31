const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contact = new Schema({
  first_name: {type: String},
  last_name: {type: String},
  title: {type: String},
  email: {type: String},
  message: {type: String}
}, {
   collection: 'contacts'
})

module.exports = mongoose.model('contact', contact)