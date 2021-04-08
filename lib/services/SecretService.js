const Secret = require('../models/Secret');
const { sendSms } = require('../utils/twilio.js');

module.exports = class SecretService {
    static async sendAndSave(to, body) {
        const data = await Secret.insert(body);
        console.log(data)
        console.log(to, body)

        await sendSms(to, body.bitly_url)

        return data;
    }
}