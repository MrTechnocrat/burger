var express = require('express');
var bodyParser = require('body-parser');
var methodOverrite = require('method-overrite');

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverrite('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Listening on prt: + PORT');