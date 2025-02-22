const express = require('express');

const router = express.Router();

const cinema = require('../controllers/cinema.controller')

router.get('/', cinema.index )
router.get('/movies', cinema.movies)
router.get('/movie/:id', cinema.detail)

module.exports = router;
