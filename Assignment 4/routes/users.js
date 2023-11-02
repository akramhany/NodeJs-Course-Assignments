const express = require('express')

const router = express.Router();

const adminData = require('./admin.js')

router.get('/', (req, res, next) => {
    res.render('users', {pageTitle: 'Users', path: '/users', users: adminData.users});
})

module.exports = router;