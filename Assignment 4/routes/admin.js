const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('add-users');
});

router.post('/', (req, res, next) => { 
    res.render('add-users');
})

exports.router = router;