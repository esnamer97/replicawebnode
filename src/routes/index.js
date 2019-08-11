const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title:'Replica web site'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title:'Replica Contact'});
});

module.exports = router;