const { request } = require('express');
const Travel = require('../travelModel.js');

const travelController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return { 
    message: { err: `Error, ${type}` }
  };
};

travelController.add = (req, res, next) => {

  console.log(req.body);
    const newName = req.body.firstName;
    const newlocation = req.body.location;
    const newKeySites = req.body.keySites;
    const newDate = req.body.date;
    
    Travel.create({firstName: newName, location: newlocation, keySites: newKeySites, date: newDate}, (err, entry) => {
        if (err) { 
          res.status(500).send((createErr({
            method: 'add',
            type: 'can not create an entry',
            err: err
          })).message).json();
        }
        
    res.locals.newEntry = entry;
    return next();
    });
}

travelController.view = (req, res, next) => {
  Travel.find({}, (err, entries) => {
    // entries is an Array of all the entry objects
    res.locals.allEntries = entries;
    return next();
  })
}

travelController.getEntry = (req,res,next) => {
    const findLocation = req.params.location;
    
    Travel.find({location: findLocation}, 'firstName location keySites date', (err, entries) => {
      if (err || entries.length === 0) { 
        res.status(500).send((createErr({
          method: 'add',
          type: 'can not find entry',
          err: err
        })).message).json();
      }
    
      res.locals.oldEntries = entries;
      return next();
    });
}

travelController.updateEntry = (req, res, next) => {
    const findLocation = req.params.location;
    const newDate = req.body.date;
    const newKeySites = req.body.keySites; 
    
    Travel.findOneAndUpdate({location: findLocation}, 
      {
        date: newDate,
        keySites: newKeySites
      },
      {new: true},
      (err, updatedUser) => {
      if (err || updatedUser === null) {
        res.status(500).send((createErr({
            method: 'add',
            type: 'can not update entry',
            err: err
          })).message).json();
      }

      res.locals.update = true;
      return next();
    });
}

travelController.deleteStudent = (req, res, next) => {
    Travel.findOneAndDelete({location: req.params.location}, (err, deletedDoc) => {
        if (err || deletedDoc === null) {
          res.status(500).send((createErr({
              method: 'add',
              type: 'can not delete entry',
              err: err
          })).message).json();
        }
        console.log("Deleted Doc: ", deletedDoc);
        res.locals.delete = "deleted";
        return next();
      })
}

module.exports = travelController;
