const Cinema = require("../models/Movie.model");

module.exports.index = (req, res, next) => {
    res.render("index");  
};


module.exports.movies = (req, res, next) => {
    Cinema.find().then((movies) => {
      res.render("movies", { movies });
    });
  };

  module.exports.detail = (req, res, next) => {
    Cinema.findById(req.params.id).then((movie) => {
      /* return res.json(movie) */
      res.render("detail", { movie });
    });
  };
  