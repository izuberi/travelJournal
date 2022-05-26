const express = require('express');
const travelController = require('../controller/travelController');
const router = express.Router();

// Create a travel entry
router.post('/', travelController.add, (req,res) => {
    res.send(res.locals.newEntry);
});

// View all travel entries
router.get('/', travelController.view, (req, res) => {
  res.send(res.locals.allEntries);
});

// Read a bucket list entry
router.get('/:location', travelController.getEntry, (req, res) => {
    if (res.locals.oldEntries === 0) res.sendStatus(400);
    else res.send(res.locals.oldEntries);
  });

// Update a travel entry
router.patch('/:location', travelController.updateEntry, (req, res) => {
    // giving error even though it updated, changed it by falsie
    if (!res.locals.update) res.sendStatus(400);
    else res.sendStatus(200);
  });

// Delete a travel entry
router.delete('/:location', travelController.deleteStudent, (req, res) => {
  //console.log("Delete: ",res.locals.delete);
  if (!res.locals.delete) res.sendStatus(400);
  else res.sendStatus(200);
});

module.exports = router;