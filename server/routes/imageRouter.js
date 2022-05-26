const express = require('express');
const imageController = require('../controller/imageController');
const router = express.Router();

// Get a image URL
router.get('/:location', imageController.getImage, (req, res) => {
    res.send(res.locals.image);
});

module.exports = router;