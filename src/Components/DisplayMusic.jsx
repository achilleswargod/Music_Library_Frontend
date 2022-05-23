const DisplayMusic = (props) => {
  return (
    <table className="display-music">
      <thread>
        <tr className="display-row">
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
      </thread>
      <tbody>
        {props.songEntries.map((song, index) => {
          return (
            <tr>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayMusic;
