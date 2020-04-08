const utils = require('../../helpers/utils');
const crypto = require('crypto');
const ALGO = 'sha256';
const AWS = require('aws-sdk');
const dotenv = require('dotenv')
const env = dotenv.config({path:require('find-config')('server/.env') });
const s3 = new AWS.S3({
    accessKeyId: env.parsed.ACCESS_KEY,
    secretAccessKey: env.parsed.SECRET_KEY,
    region: 'ap-south-1'
})

const getSignedUrl = (params) => {
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
        req.body = req.body.data;
        if (req.body.bucketName && req.body.bucketName.length && req.body.files && req.body.files.length && req.body.folderName && req.body.userId) {
            const dataToSend = [];
            console.log(req.body);
            for (let file of req.body.files) {
                let fileName = `${new Date().getTime()}_${req.body.userId}`;
                const hash = crypto.createHash(ALGO)
                .update(`${fileName}`, 'utf-8')
                .digest('hex');
                const params = {
                  'Bucket': req.body.bucketName,
                  'Key': `${req.body.folderName}/${req.body.userId}/${hash}`,
                  'Expires': 6000,
                  'ContentType': file.contentType,
                  'ACL': 'public-read',
                };
                console.log(params);

                try {
                  let signedUrl = await getSignedUrl(params);
                  let data = JSON.parse(JSON.stringify(file));
                  console.log({signedUrl});
                  data.url = signedUrl;
                  data.hash = hash;
                  data.fileName = fileName;
                  dataToSend.push(data);
                } catch (error) {
                  res.status(500).json({error});
                }
            }
            res.status(200).send(dataToSend);

        } else {
            res.status(422).json({error: 'Check if any of these key is missing while passing to this api [bucketName, files(As Array) folderName, userId]'});
        }      
    },
    uploadVideo: (req, res) => {
        const file = req.file
        console.log({file}, req.file.path, JSON.stringify(req.body));
        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return res.status(500).send(error);
        }
        res.send('ok');
    }
}