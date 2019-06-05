<<<<<<< HEAD
 {
   $('button#play-pause').on('click', function() {
     player.playPause();
     $(this).attr('playState', player.playState);
   });
=======
{
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate();
    $(this).attr('playState', player.playState);
  });
>>>>>>> checkpoint-11-BlocJams-Sliders

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
<<<<<<< HEAD
    player.playPause(nextSong);
=======
    helper.playPauseAndUpdate(nextSong);
>>>>>>> checkpoint-11-BlocJams-Sliders
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
<<<<<<< HEAD
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) { return; }

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });
 }
=======
    const prevSongIndex = currentSongIndex - 1;
    if (prevSongIndex < 0) { return; }

    const prevSong = album.songs[prevSongIndex];
    helper.playPauseAndUpdate(prevSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(player.prettyTime(currentTime));
    $('#time-control input').val(percent);
  }, 1000);

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });

}
>>>>>>> checkpoint-11-BlocJams-Sliders
