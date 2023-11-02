const express = require('express')

const path = require('path')

const app = express();

const usersRouter = require('./routes/users')
const defaultRouter = require('./routes/default')

app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRouter);
app.use(defaultRouter);

app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(3000);