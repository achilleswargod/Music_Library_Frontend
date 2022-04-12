import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  });

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/musiclibrary/");
    setSongs(response.data);
    console.log(response.data);
  }

  return (
    <div>
      <h1>Async Await Axios Example</h1>
    </div>
  );
}

export default App;
