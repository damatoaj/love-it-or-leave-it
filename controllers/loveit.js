const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

ROUTER.get('/movies', (req, res) => {
    res.render('loveit/movies', {movies: ['Last of The Mohicans', 'There Will Be Blood']})
});

ROUTER.get('/foods', (req, res) => {
    res.render('loveit/foods', {foods: ['pizza', 'artichoke']})
});

module.exports = ROUTER;