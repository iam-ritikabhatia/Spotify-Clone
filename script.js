console.log("Welcme to Spotify");

// Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Let-me-Love-You", filePath: "song/1.mp3", coverPath: "images/cover1.png"},
    {songName: "Tu-Mileya", filePath: "song/2.mp3", coverPath: "images/cover2.png"},
    {songName: "Simple-Suit", filePath: "song/3.mp3", coverPath: "images/cover3.png"},
    {songName: "Tu-Meri-Rani", filePath: "song/4.mp3", coverPath: "images/cover4.png"},
    {songName: "Kudiye-Ni", filePath: "song/5.mp3", coverPath: "images/cover5.png"},
    {songName: "Baari", filePath: "song/6.mp3", coverPath: "images/cover6.png"},   
]

songItems.forEach((element, i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
//  audioElement.play();

//handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events 
audioElement.addEventListener('timeupdate', ()=>{

    //update Seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.Duration/100;

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

    }
    )
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', () => {
        makeAllPlays();
        songIndex = parseInt(element.id);
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex + 1}.mp3`;``
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = 'song/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

}
)


document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src ='song/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
}
)

