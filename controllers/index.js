const express = require("express");
const router = express.Router();

router.use("/dog", require("./dog"));

module.exports = router;