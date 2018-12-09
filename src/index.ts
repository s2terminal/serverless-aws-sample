import * as AWS from 'aws-sdk';
import * as AWSLambda from 'aws-lambda';

const rekognition = new AWS.Rekognition();
const s3 = new AWS.S3();

exports.hello = function(event: any, context: AWSLambda.Context, callback: AWSLambda.Callback) {
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
  const paramsToRekognition = {
    Image: {
      S3Object: {
        Bucket: bucket,
        Name: key
      }
    },
    MaxLabels: 10,
    MinConfidence: 1
  };

  rekognition.detectLabels(paramsToRekognition, function (err, data) {
    const paramsToPut = {
      Body: JSON.stringify(data.Labels, null, 2),
      Bucket: 'awstags-output-tags',
      Key: `${key}.json`
    };
    s3.putObject(paramsToPut, function (err, data) {
      console.log("成功！");
    });
  });
};
