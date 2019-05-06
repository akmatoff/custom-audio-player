/* Audio Player */

var songs = ["Ace Aura - Kaleidoscope.mp3", "Barely Alive - Bring That Back (Hi I_m Ghost _MLG_ Flip).mp3", "FaceSplit - Buzzsaw.mp3", 
"Hi I_m Ghost - Spooky Life.mp3", "MOODY GOOD - SIXTYSIXTY.mp3", "PhaseOne - Insanity.mp3", "Franky Nuts - Jump Up (VIP).mp3", 
"Doctor P - Something To Believe In (Franky Nuts Remix).mp3"];

var songTitle = document.getElementById('songTitle');
var seekBar = document.getElementById('seekBar');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var fillBar = document.querySelector('.fill');
var playButtonIcon = document.querySelector('#play');
var playButton = document.querySelector('.play');

var song = new Audio();
var currentSong = 0;

window.onload = loadSong();

function loadSong() {
	song.src = "audio/" + songs[currentSong];
	songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
	song.playbackRate = 1;
}

song.addEventListener('play', function() {
	playButtonIcon.className = "fas fa-pause";
});

song.addEventListener('pause', function() {
	playButtonIcon.className = "fas fa-play";
});

song.addEventListener('timeupdate', function(){

	var position = song.currentTime / song.duration;

	fillBar.style.width = position * 100 + '%';
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

let mouseDown = false;

function clamp (min, val, max) {
	return Math.min(Math.max(min, val), max);
}

function getP(e) {
	let p = (e.clientX - seekBar.offsetLeft) / seekBar.clientWidth;
	p = clamp(0, p, 1);

	return p;
}

seekBar.addEventListener('mouseDown', function (e) {
	mouseDown = true;



	fill.style.width = p * 100 + '%';


});

window.addEventListener('mouseup', function(e) {
	if (!mouseDown) return;

	mouseDown = false;

	let p = getP(e);

	fillBar.style.width = p * 100 + '%';

	song.currentTime = p * song.duration;
});

window.addEventListener('mousemove', function(e){
	if (!mouseDown) return;

	let p = getP(e);

	fillBar.style.width = p * 100 + '%';
});

/* OVERLAY */

function openNav() {
	document.getElementById('OverNav').style.height = "100%";
}

function closeNav() {
	document.getElementById('OverNav').style.height = "0%"; 
}
