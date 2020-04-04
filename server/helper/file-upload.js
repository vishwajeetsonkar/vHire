const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});

const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: 'ap-south-1'
})
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'appveil',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;