const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const FirebaseConfig = require("./firebase/firebase.config");
const firestore = FirebaseConfig.firestore;

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.get('/links/:shortId', async (req, res) => {
  try {
    const { shortId } = req.params;
    const query = await firestore.collection("urls").where("shortId", "==", shortId).get();

    if (query.empty) return res.status(404).send("Not found");

    const link = query.docs[0].data();
    res.status(200).send(link);

  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/redirect/:shortId', async (req, res) => {
  try {
    const { shortId } = req.params;
    const query = await firestore.collection("urls").where("shortId", "==", shortId).get();

    if (query.empty) return res.status(404).send("Not found");

    const link = query.docs[0].data();
    res.redirect(link.originUrl);

  } catch (error) {
    res.status(400).send(error.message);
  }
});

// nodemon urlShortenerApi.js
if (process.env.NODE_ENV !== 'production') {
  app.listen(3005, () => {
    console.log('App listen in http://localhost:3005');
  });
}

module.exports = app;