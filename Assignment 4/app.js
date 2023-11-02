const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin.js');
const usersRoutes = require('./routes/users.js');

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);

app.use('/users', usersRoutes);

app.listen(3000);