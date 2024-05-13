const songs = [
    {
      title: "Bones",
      artist: "Imagine Dragons",
      image: "photos/Imagine_Dragons_Bones_cover.jpg",
      audio: "songs/y2mate.com - Imagine Dragons  Bones Official Lyric Video.mp3"
    },
    {
      title: "Enemy",
      artist: "Imagine Dragons x JID",
      image: "photos/enemy.jpg",
      audio: "songs/y2mate.com - Imagine Dragons x JID  Enemy Lyrics.mp3"
    },
    {
        title: "Thunder",
        artist: "Imagine Dragons",
        image: "photos/Imagine_Dragons_Thunder.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  Thunder Lyrics.mp3"
      },
    {
        title: "Demons",
        artist: "Imagine Dragons",
        image: "photos/demons.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  Demons Lyrics.mp3"
      },
      {
        title: "Believer",
        artist: "Imagine Dragons",
        image: "photos/believer.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  Believer Lyrics.mp3"
      },
      {
        title: "Bad Liar",
        artist: "Imagine Dragons",
        image: "photos/Imagine_Dragons_Bad_Liar.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  Bad Liar Lyrics.mp3"
      },
      {
        title: "Radioactive",
        artist: "Imagine Dragons",
        image: "photos/radioactive.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  Radioactive Lyrics.mp3"
      },
      {
        title: "Whatever it Takes",
        artist: "Imagine Dragons",
        image: "photos/whatever it takes.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  Whatever It Takes Lyrics  Lyric Video.mp3"
      },
      {
        title: "Natural",
        artist: "Imagine Dragons",
        image: "photos/Imagine_Dragons_Natural.png",
        audio: "songs/y2mate.com - Imagine Dragons  Natural Lyrics.mp3"
      },
      {
        title: "Warriors",
        artist: "Imagine Dragons",
        image: "photos/warriors.jpg",
        audio: "songs/y2mate.com - Warriors ft Imagine Dragons  Worlds 2014  League of Legends.mp3"
      },
      {
        title: "I'm so Sorry",
        artist: "Imagine Dragons",
        image: "photos/i'm so sorry.png",
        audio: "songs/y2mate.com - Im So Sorry.mp3"
      },
      {
        title: "Battle Cry",
        artist: "Imagine Dragons",
        image: "photos/Battle_Cry_official_single_cover.jpg",
        audio: "songs/y2mate.com - Battle Cry.mp3"
      },
      {
        title: "Gold",
        artist: "Imagine Dragons",
        image: "photos/gold.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  Gold Audio.mp3"
      },
      {
        title: "Ready Aim Fire",
        artist: "Imagine Dragons",
        image: "photos/ready aim fire.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  Ready Aim Fire Audio.mp3"
      },
      {
        title: "Who we are",
        artist: "Imagine Dragons",
        image: "photos/who we are.jpg",
        audio: "songs/y2mate.com - Who We Are.mp3"
      },
      {
        title: "I Bet my Life",
        artist: "Imagine Dragons",
        image: "photos/i bet my life.jpg",
        audio: "songs/y2mate.com - Imagine Dragons  I Bet My Life Audio.mp3"
      },
      {
        title: "Eyes Closed",
        artist: "Imagine Dragons",
        image: "photos/eyes closed.jpg",
        audio: "songs/y2mate.com - Eyes Closed  Imagine Dragons Audio.mp3"
      },
      {
        title: "Not Today",
        artist: "Imagine Dragons",
        image: "photos/not today.png",
        audio: "songs/y2mate.com - Imagine Dragons  Not Today Audio.mp3"
      },
      {
        title: "Friction",
        artist: "Imagine Dragons",
        image: "photos/friction.jpg",
        audio: "songs/y2mate.com - Friction.mp3"
      },
      {
        title: "Mad World",
        artist: "Imagine Dragons",
        image: "photos/mad word.jpg",
        audio: "songs/y2mate.com - Imagine Dragons   Mad World  lyrics.mp3"
      }
    // Add more songs here
];

const song = document.getElementById("song");
const progress = document.getElementById("progress");
const ctrlIcon = document.getElementById("ctrlIcon");
const songInfo = document.querySelector(".song-info");
const songImg = songInfo.querySelector(".song-img");
const songTitle = songInfo.querySelector(".song-title");
const songArtist = songInfo.querySelector(".song-artist");
const songListOverlay = document.getElementById("song-list-overlay"); // Update
const songListItems = songListOverlay.querySelectorAll("li"); // Update
const barsIcon = document.getElementById("barsIcon"); // Update
const backwardIcon = document.querySelector(".fa-backward");
const forwardIcon = document.querySelector(".fa-forward");

let currentSongIndex = 0;

function loadSong(index) {
    const currentSong = songs[index];
    song.src = currentSong.audio;
    songImg.src = currentSong.image;
    songTitle.textContent = currentSong.title;
    songArtist.textContent = currentSong.artist;
    progress.value = 0;
    song.load();
    song.play();
    toggleControls(); // Ensure controls are always shown when loading a song
}

function toggleSongList() {
    songListOverlay.classList.toggle("active"); // Update
}

function toggleControls() {
    // Ensure both icons are always shown when controls are toggled
    backwardIcon.style.display = "block";
    forwardIcon.style.display = "block";
}

function playSong(index) {
    loadSong(index);
    toggleSongList();
    currentSongIndex = index; // Update the current song index when a song is selected

    if (song.paused) {
      song.play();
      ctrlIcon.classList.remove("fa-play");
      ctrlIcon.classList.add("fa-pause");
    } else {
      song.pause();
      ctrlIcon.classList.remove("fa-pause");
      ctrlIcon.classList.add("fa-play");
    }

}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
      currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
}

song.onloadedmetadata = function () {
    progress.max = song.duration;
};

song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

progress.onchange = function () {
    song.currentTime = progress.value;
};

ctrlIcon.onclick = function () {
    if (song.paused) {
      song.play();
      ctrlIcon.classList.remove("fa-play");
      ctrlIcon.classList.add("fa-pause");
    } else {
      song.pause();
      ctrlIcon.classList.remove("fa-pause");
      ctrlIcon.classList.add("fa-play");
    }
};

barsIcon.onclick = function () {
    toggleSongList();
};

backwardIcon.onclick = function () {
    prevSong();
};

forwardIcon.onclick = function () {
    nextSong();
};

songListItems.forEach((item, index) => {
    item.onclick = function () {
      playSong(index);
    };
});

loadSong(currentSongIndex);

barsIcon.onclick = function () {
    toggleSongList();
};

   
  
   
  