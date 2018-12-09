import * as AWSLambda from 'aws-lambda';

export async function hello(event: any, context: AWSLambda.Context, callback: AWSLambda.Callback) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'こんにちはTypeScript'
    })
  };
};
