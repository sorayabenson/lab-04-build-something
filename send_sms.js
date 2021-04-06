// const twilio = require('twilio');

// const twilioClient = twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

const accountSid = 'AC5ff89bcae9015fae033f4e79cffd2edc';
const authToken = '7acdfdaa79170a0f44bbf5c5f39e74f7';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    from: '+12694302026',
    body: 'https://gph.is/2jbfwwu',
    to: '+15034386848'
  })
  .then(message => console.log('hello', message.sid));

