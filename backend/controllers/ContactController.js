const express = require('express');
const app = express();
const Contact = express.Router();


let ContactModel = require('../models/ContactModel');


Contact.route('/contact').post((req, res, next) => {
    ContactModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});




module.exports = Contact;