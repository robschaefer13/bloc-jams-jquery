{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
<<<<<<< HEAD
       <td>
        <button>
          <span class="song-number">${index + 1}</span>
          <span class="ion-play"></span>
          <span class="ion-pause"></span>
        </button>
       </td>
       <td>${song.title}</td>
       <td>${song.duration}</td>
      </tr>
    `);

        song.element.on('click', event => {
          player.playPause(song);
=======
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
            </button>
        </td>
        <td>${song.title}</td>
        <td>${player.prettyTime(song.duration)}</td>
       </tr>
    `);

        song.element.on('click', event => {
          helper.playPauseAndUpdate(song);
>>>>>>> checkpoint-11-BlocJams-Sliders
          $('button#play-pause').attr('playState', player.playState);
        });

        $('#song-list').append(song.element);
  });
}
