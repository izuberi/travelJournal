const express = require('express');
const travelController = require('../controller/travelController');
const router = express.Router();

// Create a travel entry
router.post('/', travelController.add, (req,res) => {
    res.status(200).json(res.locals.newEntry);
});

// View all travel entries
router.get('/', travelController.view, (req, res) => {
  res.send(res.locals.allEntries);
});

// Read a bucket list entry
router.get('/:location', travelController.getEntry, (req, res) => {
  res.status(200).json(res.locals.oldEntries);
  });

// Update a travel entry
router.patch('/:location', travelController.updateEntry, (req, res) => {
    // giving error even though it updated, changed it by falsie
    res.sendStatus(200);
  });

// Delete a travel entry
router.delete('/:location', travelController.deleteStudent, (req, res) => {
  console.log("Error Starts here", res.locals.delete);
  res.sendStatus(200);
});

module.exports = router;