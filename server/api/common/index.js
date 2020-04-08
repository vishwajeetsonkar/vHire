const express = require('express');
const commonController = require('./common.controller');
const utils = require('../../helpers/utils');
const router = express.Router();
const multer = require('multer');

var upload = multer({ dest: 'uploads/' });
router.post('/getPresignedUrl', commonController.getPresignedUrl);
router.post('/uploadVideo', upload.single('file'), commonController.uploadVideo);
    
module.exports = router;