importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAcpfLD0g1VzJeUyqstozD4VtU5td1hO8o",
    authDomain: "proxym-378ab.firebaseapp.com",
    projectId: "proxym-378ab",
    storageBucket: "proxym-378ab.appspot.com",
    messagingSenderId: "187606071518",
    appId: "1:187606071518:web:1c49a8ec97316cce7bea4f"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
