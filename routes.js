const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("./models");

router.get("/api/menu", function(req, res) {
  db.MenuItem.find({}, null, { sort: { position: 1 } })
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err));
});

router.post("/api/menu", function(req, res) {
  db.MenuItem.updateMany(
    { position: { $gte: req.body.position } },
    { $inc: { position: 1 } }
  )
    .then(result => {
      db.MenuItem.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

router.put("/api/menu", function(req, res) {
  let where = {};
  let set = {};
  const op = req.body.oldPosition;
  const np = req.body.item.position;

  if (op > np) {
    where.position = { $lt: op, $gte: np };
    set.$inc = { position: 1 };
  } else if (op < np) {
    where.position = { $gt: op, $lte: np };
    set.$inc = { position: -1 };
  };

  db.MenuItem.updateMany(where, set)
    .then(result => {
      db.MenuItem.findOneAndUpdate({ _id: req.body.id }, req.body.item)
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

router.delete("/api/menu", function(req, res) {
  db.MenuItem.updateMany(
    { position: { $gte: req.body.position } },
    { $inc: { position: -1 } }
  )
    .then(result => {
      db.MenuItem.findOneAndDelete({ _id: req.body.id })
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

// If no API routes are hit, send the React app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
