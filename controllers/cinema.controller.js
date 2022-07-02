const Cinema = require("../models/Movie.model");

module.exports.index = (req, res, next) => {
    res.render("index");  
};


module.exports.movies = (req, res, next) => {
    Cinema.find().then((movies) => {
      res.render("movies", { movies });
    });
  };