const router = require("express").Router();
let Message = require("../models/message.model");

router.route("/").get((req, res) => {
  Message.find({}).exec((err, message) => {
    if (err) {
      res.send("ROUTER: " + err).status(500);
    } else {
      res.send(message).status(200);
    }
  });
});

router.route("/send").post((req, res) => {
  Message.create(req.body)
    .then(message => {
      res.send(message).status(200);
    })
    .catch(err => {
      console.log("ROUTER: " + err).status(500);
    });
});

module.exports = router;
