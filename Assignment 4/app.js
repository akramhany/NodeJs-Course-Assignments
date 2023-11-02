const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url);
})

app.listen(3000);