var playlist = {artistName: "songTitle" };

function updatedPlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}

