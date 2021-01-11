const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

ROUTER.get('/products', (req, res) => {
    res.render('leaveit/products', {products: ['kayaks', 'climbing shoes']})
});

ROUTER.get('/animals', (req, res) => {
    res.render('leaveit/animals', {animals: ['sand crab', 'corny joke dog']})
});

module.exports = ROUTER;