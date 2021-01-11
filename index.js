const EXPRESS = require('express');
const APP = EXPRESS();
const ejsLayouts = require('express-ejs-layouts');

// APP.get('/', (req, res) => {
//     res.send('Hello, World!')
// });

APP.set('view engine', 'ejs');
APP.use(ejsLayouts);

APP.use('/loveit', require('./controllers/loveit'));
APP.use('/leaveit', require('./controllers/leaveit'));

APP.get('/', (req, res) => {
    res.render('home');
});

// APP.get('/loveit/movies', (req, res) => {
//     res.render('movies', {movies: ['Last of The Mohicans', 'There Will Be Blood']})
// });

// APP.get('/loveit/foods', (req, res) => {
//     res.render('foods', {foods: ['pizza', 'artichoke']})
// });

// APP.get('/leaveit/products', (req, res) => {
//     res.render('products', {products: ['kayaks', 'climbing shoes']})
// });

// APP.get('/leaveit/animals', (req, res) => {
//     res.render('animals', {animals: ['sand crab', 'corny joke dog']})
// });

APP.listen(8000);