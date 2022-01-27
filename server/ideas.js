const express = require('express');
const ideasRouter = express.Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');

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
  const foundIdea = getFromDatabaseById('ideas', id);
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
ideasRouter.get('/:ideaId', (req, res, next) => {
  res.send(req.idea);
})

// Update an idea
ideasRouter.put('/:ideaId', (req, res, next) => {
  const newIdea = updateInstanceInDatabase('ideas', req.body);
  res.send(newIdea);
});

// Delete an idea
ideasRouter.delete('/:ideaId', (req, res, next) => {
  deleteFromDatabasebyId('ideas', req.idea.id);
  res.sendStatus(204);
})

// Create an idea
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
})

module.exports = ideasRouter;