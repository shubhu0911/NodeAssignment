var express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController.js");
router.get('/login', studentController.studentLoginget);
router.post('/login', studentController.studentLoginpost);
module.exports = router;