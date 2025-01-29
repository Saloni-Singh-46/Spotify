console.log("Welcome to Spotify");

let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let songs=[
    {songName: 'Salam-e-Ishq',filePatht:"/songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: 'Let me Love You',filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: 'Let me Love You',filePath:"/songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: 'Let me Love You',filePath:"songs/1.mp3", coverPath:"covers/3.jpg"},
    {songName: 'Let me Love You',filePath:"songs/1.mp3", coverPath:"covers/4.jpg"},
    {songName: 'Let me Love You',filePath:"songs/1.mp3", coverPath:"covers/5.jpg"},
    {songName: 'Let me Love You',filePath:"songs/1.mp3", coverPath:"covers/6.jpg"},
    {songName: 'Let me Love You',filePath:"songs/1.mp3", coverPath:"covers/7.jpg"},
    {songName: 'Let me Love You',filePath:"songs/1.mp3", coverPath:"covers/8.jpg"},
    {songName: 'Let me Love You',filePath:"songs/1.mp3", coverPath:"covers/9.jpg"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
});