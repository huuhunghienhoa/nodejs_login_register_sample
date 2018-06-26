const express = require('express')
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', './views')
app.set('view engine', 'ejs');
app.use(express.static('public'))

var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');

app.use('/login', loginRouter);
app.use('/register', registerRouter);

// define the home page route


app.listen(3000, () => console.log('Example app listening on port 3000!'))

