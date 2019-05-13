/* Audio Player */

var songs = ["Ace Aura - Kaleidoscope.mp3", "Barely Alive - Bring That Back (Hi I_m Ghost _MLG_ Flip).mp3", "FaceSplit - Buzzsaw.mp3", 
"Hi I_m Ghost - Spooky Life.mp3", "MOODY GOOD - SIXTYSIXTY.mp3", "PhaseOne - Insanity.mp3", "Franky Nuts - Jump Up (VIP).mp3", 
"Doctor P - Something To Believe In (Franky Nuts Remix).mp3"];

var songTitle = document.getElementById('songTitle');
var seekBar = document.getElementById('seekBar');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var playButtonIcon = document.querySelector('#play');
var playButton = document.querySelector('.play');
var songSlider = document.getElementById('songSlider');

var song = new Audio();
var currentSong = 0;

window.onload = loadSong();

function loadSong() {
	song.src = "audio/" + songs[currentSong];
	songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
}

setInterval(updateSongSlider, 1000);

function updateSongSlider() {
	var c = Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
}

function convertTime (secs) {
	var min = Math.floor(secs/60);
	var sec = secs & 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}

song.addEventListener('play', function() {
	playButtonIcon.className = "fas fa-pause";
});

song.addEventListener('pause', function() {
	playButtonIcon.className = "fas fa-play";
});


function playOrPauseSong () {
		song.playbackRate = 1;
	if(song.paused) {
		song.play();
	}

	else {
		song.pause();
	}
}

function pre() {

	loadSong();
	currentSong--;
	currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
	song.play();
}

function nextSong() {
	loadSong();
	currentSong = currentSong + 1 % songs.length;
	currentSong = (currentSong > songs.length) ? songs.length - songs.length - 1 : currentSong;
	song.play();
}

function seekSong() {
	song.currentTime = songSlider.value;
	currentTime.textContent = convertTime(song.currentTime);
}

/* OVERLAY */

function openNav() {
	document.getElementById('OverNav').style.height = "100%";
}

function closeNav() {
	document.getElementById('OverNav').style.height = "0%"; 
}
