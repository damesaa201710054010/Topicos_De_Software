const mongoose = require('mongoose');

const URI = 'mongodb://localhost/products';

mongoose.connect(URI)
        .then(db => console.log('database is conected'))
        .catch(err => console.error(err));

module.exports = mongoose; 