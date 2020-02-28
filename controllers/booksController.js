// This page sets the methods to grab the data from Mongo
const db = require("../models")

// Methods for the controllers
module.exports = {
    findAll: function(req, res) {
        db.Book
        .find(req.query)
    }
}