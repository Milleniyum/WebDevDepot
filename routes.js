const passport = require("passport");
const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("./models");

router.post("/api/register", function(req, res) {
  console.log("registering user");
  db.User.register(
    new db.User({ username: req.body.username, email: req.body.email }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      passport.authenticate("local")(req, res, function(data) {
        res.json(req.user);
      });
    }
  );
});

router.post("/api/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.get("/api/authorized", function(req, res) {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  }
  res.json({ message: "no auth" });
});

router.get("/api/logout", function(req, res){
  req.logout();
  res.json({ message: "logged out" });
});

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
  const np = req.body.data.position;

  if (op > np) {
    where.position = { $lt: op, $gte: np };
    set.$inc = { position: 1 };
  } else if (op < np) {
    where.position = { $gt: op, $lte: np };
    set.$inc = { position: -1 };
  }

  db.MenuItem.updateMany(where, set)
    .then(result => {
      db.MenuItem.findOneAndUpdate({ _id: req.body.id }, req.body.data)
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

router.delete("/api/menu", function(req, res) {
  Promise.all([
    db.MenuItem.updateMany(
      { position: { $gte: req.body.position } },
      { $inc: { position: -1 } }
    ),
    db.Resource.updateMany(
      { menu_item_id: req.body.id },
      { $unset: { menu_item_id: "" } }
    )
  ])
    .then(result => {
      db.MenuItem.findOneAndDelete({ _id: req.body.id })
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

router.get("/api/resource/:id", function(req, res) {
  let where, sort;
  req.params.id != "noid"
    ? (where = { menu_item_id: req.params.id })
    : (where = {});
  req.params.id != "noid" > 0
    ? (sort = { sort: { likes: -1 } })
    : (sort = { sort: { title: 1 } });

  db.Resource.find(where, null, sort)
    .populate("menu_item_id")
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err));
});

router.post("/api/resource", function(req, res) {
  db.Resource.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err));
});

router.put("/api/resource", function(req, res) {
  console.log(req.body.data.menu_item_id);
  db.Resource.findOneAndUpdate({ _id: req.body.id }, req.body.data)
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err));
});

router.delete("/api/resource", function(req, res) {
  db.Resource.findOneAndDelete({ _id: req.body.id })
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err));
});

// If no API routes are hit, send the React app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
