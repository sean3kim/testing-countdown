const express = require("express");
const router = express.Router();

const {
    newTimer,
} = require("../controllers/timersController");

router.route("/new")
    .post(newTimer)

module.exports = router;