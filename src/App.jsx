import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic";
import SearchBar from "./Components/SearchBar";
import AddSongForm from "./Components/AddSongForm";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/musiclibrary/");
    console.log("getAllSongs Response", response.data);
    setSongs(response.data);
    setFilteredSongs(response.data);
  }

  async function postNewSong(newSong) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/musiclibrary/",
      newSong
    );
    let songlibrary = [...songs, response.data];
    setSongs(songlibrary);
  }

  return (
    <div className="Music-Library">
      <h1 className="nav-title">Music Library!</h1>
      <div>
        <SearchBar songs={songs} setFilteredSongs={setFilteredSongs} />
      </div>
      <h3 className="form-title">Add a Song</h3>
      <div className="border-box">
        <AddSongForm addNewSongProperty={postNewSong} />
      </div>
      <DisplayMusic songEntries={filteredSongs} />
    </div>
  );
}

export default App;
