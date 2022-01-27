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

// Get all minions
minionsRouter.get('/', (req, res, next) => {
  const allMinions = getAllFromDatabase('minions');
  res.status(200).send(allMinions);
});

// Get a single minion



module.exports = minionsRouter;