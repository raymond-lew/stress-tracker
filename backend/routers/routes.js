(express = require("express")), (router = express.Router());
const Entry = require("../models/entry");

router.route("/create").post(async (req, res) => {
  const date = new Date();
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const dateAdded = await Entry.find(
    { dateSent: { $gte: yesterday, $lt: today } },
    { userName: req.query.username }
  );

  if (dateAdded.length === 1) {
    res.json({
      message: "Daily limit reached, please try again in 24 hours",
    });
    return;
  } else var total = await Entry.countDocuments();

  function getNextId() {
    total += 1;
    return total;
  }
  const list = await new Entry({
    ...req.body,
    entryId: getNextId(),
    dateSent: date.toDateString(),
  });
  list
    .save()
    .then((list) => {
      res.json({
        message: "New entry was added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
});

router.route("/entries").get(async (req, res, next) => {
  await Entry.find({ userName: req.query.username }, { _id: 0 })
    .then((results) => {
      res.json({
        dataRate: results,
        status: "success",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;
