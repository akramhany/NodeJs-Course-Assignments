const express = require("express");

const app = express();

/* app.use((req, res, next) => {
    console.log("Hello I am One");
    next();
});

app.use((req, res, next) => {
    console.log("Hello I am Two");
    res.send("<h1>Hello Worlddddddd</h1>");
}); */

app.use('/users', (req, res, next) => {
    console.log("Hello Users");
    res.send("<h2>Hello Users</h2>");
})

app.use('/', (req, res, next) => {
    console.log("Default");
    res.send("<h2>Default</h2>");
})

app.listen(3000);