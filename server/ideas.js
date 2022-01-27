const express = require('express');
const ideasRouter = express.Router();

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require('./db.js');

// Ideas Param
ideasRouter.param('ideaId', (req, res, next, id) => {
  const foundIdea = getFromDatabaseById('idea', id);
  if (foundIdea) {
    req.idea = foundIdea;
    next();
  } else {
    res.sendStatus(404);
  }
})

// Get all ideas
ideasRouter.get('/', (req, res, next) => {
  const allIdeas = getAllFromDatabase('ideas');
  res.send(allIdeas);
});

// Get a single idea

module.exports = ideasRouter;