const twilio = require('twilio');

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendSms = (to, message, url) => {
  return twilioClient.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    mediaUrl: [url],
    to,
  });
};

module.exports = {
  sendSms
};
