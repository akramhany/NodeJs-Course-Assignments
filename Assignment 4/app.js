const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin.js');
const usersRoutes = require('./routes/users.js');

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use('/admin', adminRoutes.router);

app.use('/users', usersRoutes);

app.listen(3000);