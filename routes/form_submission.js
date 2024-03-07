const express = require('express');
const router = express.Router();
const queryController = require('../controller/submit_form_controller');

router.post('/submit-form' , queryController.submitForm);


module.exports = router;