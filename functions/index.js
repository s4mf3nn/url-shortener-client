const FirebaseConfig = require('./firebase/firebase.config');
const urlShortenerApi = require('./urlShortenerApi');

const functions = FirebaseConfig.functions;

exports.api = functions.https.onRequest(urlShortenerApi);