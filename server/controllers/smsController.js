const { TWILIO_ACCOUNT_SECRET_ID, TWILIO_AUTH_TOKEN, PERSONAL_PHONE_NUMBER, TWILIO_PHONE_NUMBER } = process.env

module.exports = {
    sendSMS: (req, res) => {
        const { name, message, number } = req.body
        const accountSid = TWILIO_ACCOUNT_SECRET_ID;
        const authToken = TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: name + ' sent: ' + message,
                from: TWILIO_PHONE_NUMBER,
                to: `${number}`/*PERSONAL_PHONE_NUMBER*/
            })
            .then(message => {
                console.log(message)
                //Do something with this information
                res.send(message)
            }).catch(err => {
                console.log(err)
                res.sendStatus(500)
            })

    }

}