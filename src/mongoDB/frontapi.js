import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('/api/games')
      .then(res => setGames(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Video Game Store</h1>
      <ul>
        {games.map(game => (
          <li key={game._id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
}


// mongosh "mongodb+srv://eccomm.xssaih4.mongodb.net/eccomm" --apiVersion 1 --username <username>