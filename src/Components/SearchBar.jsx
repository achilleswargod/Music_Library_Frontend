import { useEffect, useState } from "react";

const SearchBar = ({ songs, setFilteredSongs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredSongs = songs.filter((song) => {
      if (song.title.includes(searchTerm)) {
        return true;
      }
      if (song.artist.includes(searchTerm)) {
        return true;
      }
      if (song.album.includes(searchTerm)) {
        return true;
      }
      if (song.genre.includes(searchTerm)) {
        return true;
      }
      if (song.release_date.includes(searchTerm)) {
        return true;
      }
    });
    setFilteredSongs(filteredSongs);
  }, [searchTerm]);

  return (
    <div>
      <form>
        <input
          type="search"
          value={searchTerm}
          placeholder="Search Songs"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
export default SearchBar;
