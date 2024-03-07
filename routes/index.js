
const express = require('express');
const router = express.Router();

router.use('/form' ,require('./form_submission'));


module.exports = router;
