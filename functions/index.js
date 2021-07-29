const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');
const admin = require ('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.notifyUser = functions.firestore
.document('messages/{messageId}')
.onCreate(event => {
    const message = event.data.data()
    const userId = message.recipientId

    const payload = {
        title : 'new Updates concerning your requests',
        body : `${message.senderId} has new updates`
    }

const db = admin.firestore()
const userRef = db.collection('users').doc(userId)
return userRef.get().then(snapshot => snapshot.data())
.then(user => {
    const tokens = user.fcmTokens ? Object.keys(user.fcmTokens): []
    if (!tokens.length){
        throw new Error ('user does not have any tokens')
    }
return admin.messaging().sendToDevice(tokens, payload)
})
.catch (err => console.error(err))
})