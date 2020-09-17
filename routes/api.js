const express = require('express');

const router = express.Router();

const BooksSaved = require('../models/booksSaved');

// Routes
router.get('/', (req, res) => {
    
    BooksSaved.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error)
        })

});

router.get('/name', (req, res) => {
    const data = {
        username: 'eden jenkins',
        age: 4
    };
    res.json(data);
});

module.exports = router;