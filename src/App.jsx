import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./DisplayMusic";

function App() {
  const [songs, getSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  });

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/musiclibrary/");
    console.log("getAllSongs Response", response.data);
    getSongs(response.data);
  }

  return (
    <div>
      <h1>Async Await Axios Example</h1>
      <DisplayMusic songEntries={songs} />
    </div>
  );
}

export default App;
