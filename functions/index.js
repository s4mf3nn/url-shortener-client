const FirebaseConfig = require('./firebase/firebase.config');
const urlShortenerApi = require('./urlShortenerApi');

const functions = FirebaseConfig.functions;
// const firestore = FirebaseConfig.firestore;
// const admin = FirebaseConfig.admin;

exports.api = functions.https.onRequest(urlShortenerApi);