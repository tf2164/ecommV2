const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'videogames';
const collectionName = 'games';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Get all games
  app.get('/api/games', (req, res) => {
    collection.find().toArray((err, games) => {
      if (err) throw err;
      res.send(games);
    });
  });

  // Get games by filter
  app.get('/api/games/filter', (req, res) => {
    const query = {}; // Build your filter criteria
    collection.find(query).toArray((err, games) => {
      if (err) throw err;
      res.send(games);
    });
  });

  app.listen(5000, () => {
    console.log('Server started on port 5000');
  });
});
