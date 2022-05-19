import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.AWS_SECRET_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'us-east-1'
})

const awsCredential = new AWS.SharedIniFileCredentials({
  profile: ''
})

const awsSNS = new AWS.SNS({
  credentials: awsCredential,
  region: 'us-east-1'
})

export { awsCredential, awsSNS }
