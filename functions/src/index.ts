const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const twilio = require('twilio')
const accountSid = functions.config().twilio.sid
const accountToken = functions.config().twilio.token

const client = new twilio(accountSid,accountToken)
const number = "+18127821779"


exports.price = functions.database.ref('/Bitcoin').onUpdate((event: any)  => {
    return admin.database().ref('/Bitcoin').once('value').then((snapshot: any) => snapshot.val())
            .then((price: any) => {
                console.log(price + "faksjdakjsdhajksdhaskjdh")
                const textMessage ={
                    body : 'Bitcoin Price is ' + price.value,
                    to : '+15519985623',
                    from : '+18127821779'
                }
                return client.messages.create(textMessage)
            }).then((message: any) => {console.log(message)})
            .catch((err: any) => { console.log(err)})

})

