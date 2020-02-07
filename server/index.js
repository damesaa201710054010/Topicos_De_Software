const express = require('express');
const app = express();
const {mongoose} = require('./database');
//const route = app.route();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());

app.use('/product', require('./routes/product.router'));


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});