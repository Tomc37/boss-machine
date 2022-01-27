const express = require('express');
const minionsRouter = express.Router();

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require('./db.js');

// Minion/:id Param
minionsRouter.param('minionId', (req, res, next, id) => {
  const foundMinion = getFromDatabaseById('minions', id);
  if (foundMinion) {
    req.minion = foundMinion;
    next();
  } else {
    res.status(404).send();
  }
})

// Get all minions
minionsRouter.get('/', (req, res, next) => {
  const allMinions = getAllFromDatabase('minions');
  res.status(200).send(allMinions);
});

// Get a single minion
minionsRouter.get('/:minionId', (req, res, next) => {
  res.status(200).send(req.minion);
});

// Update a minion
minionsRouter.put('/:minionId', (req, res, next) => {
  const updatedMinion = updateInstanceInDatabase('minions', req.body);
  res.send(updatedMinion);
});

// Create a minion
minionsRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body)
  res.status(201).send(newMinion);
});

// Delete a minion
minionsRouter.delete('/:minionId', (req, res, next) => {
  deleteFromDatabasebyId('minions', req.minion.id);
  res.status(204).send();
})

module.exports = minionsRouter;