const express = require('express');
const path = require('path');

const app = express();

//Settings
app.set('port', 3000); 
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Middlewares

//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server PORT
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
