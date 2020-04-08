const express = require('express');
const commonController = require('./common.controller');
const utils = require('../../helpers/utils');
const router = express.Router();

router.post('/getPresignedUrl', commonController.getPresignedUrl);    
module.exports = router;