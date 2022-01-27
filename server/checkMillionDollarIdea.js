const checkMillionDollarIdea = (req, res, next) => {
  const newIdea = req.body;
  if (
    req.body.weeklyRevenue &&
    req.body.numWeeks &&
    Number(req.body.weeklyRevenue) * Number(req.body.numWeeks) >= 1000000) {
      next();
  } else {
    res.sendStatus(400);
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;