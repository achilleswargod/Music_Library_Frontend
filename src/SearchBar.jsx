const SearchBar = (props) => {
  return (
    <div>
      <form>
        <input type="search" value="" />
      </form>
      {props.songEntries.filter((song, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
          </tr>
        );
      })}
    </div>
  );
};
export default SearchBar;
