const express = require('express');
const meetingsRouter = express.Router();


const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require('./db.js');

// Get all meetings
meetingsRouter.get('/', (req, res, next) => {
  const allMeetings = getAllFromDatabase('meetings');
  res.send(allMeetings);
});

// Create a meeting
meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = createMeeting(req.body);
  addToDatabase('meetings', newMeeting);
  res.status(201).send(newMeeting);
})

// Delete all meetings
meetingsRouter.delete('/', (req, res, next) => {
  deleteAllFromDatabase('meetings');
  res.sendStatus(204);
})

module.exports = meetingsRouter;