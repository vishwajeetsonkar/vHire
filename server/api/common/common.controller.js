const utils = require('../../helpers/utils');
const crypto = require('crypto');
const ALGO = 'sha256';
const AWS = require('aws-sdk');
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});


const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: 'ap-south-1'
})
function getSignedUrl(params) {
    return new Promise((resolve, reject) => {
      s3.getSignedUrl('putObject', params, function(err, url) {
        if (err) {
          reject(err);
        }
        resolve(url);
      });
    });
  }

module.exports = {
    getPresignedUrl: async (req, res) => {
        if (req.body.bucketName && req.body.bucketName.length) {
            const dataToSend = [];
            for (let file of request.body.files) {
                const hash = crypto.createHash(ALGO)
                .update(`${file.fileName}_${Date.now()}_${request.body.userId}`, 'utf-8')
                .digest('hex');
                const params = {
                  'Bucket': req.body.bucketName,
                  'Key': `videos/${req.body.userId}/${hash}`,
                  'Expires': 6000,
                  'ContentType': file.type,
                  'ACL': 'public-read',
                };
                try {
                  let signedUrl = await getSignedUrl(params);
                  let data = JSON.parse(JSON.stringify(file));
                  data.url = signedUrl;
                  data.hash = hash;
                  dataToSend.push(data);
                } catch (error) {
                  res.status(500).json({error});
                }
            }
            res.status(200).json({data: dataToSend});

        } else {
            res.status(422).json({error: 'please provide bucket name'});
        }      
    },
}