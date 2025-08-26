    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("play");
    const songSelect = document.getElementById("songSelect");
    const songs = [
      "montagen.mp3",
      "xonada.mp3",
      "delicia.mp3",
      "marogata.mp3",
      "only.mp3"
    ];
    let currentSong = 0;

    // Смена песни через select
    songSelect.addEventListener("change", function() {
      audio.src = this.value;
      audio.play();
      currentSong = songs.indexOf(this.value);
    });

    // Play / Pause
    playBtn.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });

    // Prev song
    document.getElementById("prev").addEventListener("click", function() {
      currentSong = (currentSong - 1 + songs.length) % songs.length;
      audio.src = songs[currentSong];
      songSelect.value = songs[currentSong];
      audio.play();
    });

    // Next song
    document.getElementById("next").addEventListener("click", function() {
      currentSong = (currentSong + 1) % songs.length;
      audio.src = songs[currentSong];
      songSelect.value = songs[currentSong];
      audio.play();
    });