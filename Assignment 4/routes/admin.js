const express = require('express');
const path = require('path')
const router = express.Router();

const users = []

router.get('/', (req, res, next) => {
    res.render('add-users', {pageTitle: 'Add Users', path: '/admin'})
});

router.post('/', (req, res, next) => {
    users.push(req.body.User);
    res.render('add-users', {pageTitle: 'Add Users', path: '/admin'});
})

exports.router = router;
exports.users = users;