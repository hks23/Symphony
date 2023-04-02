// prompt("Hello world");
console.log("Welcome To Symphony");
//Intializing the Variable
let songIndex=0;
let audioElement = new Audio('song/Fursat.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let myRange=document.getElementById('myRange');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
  { songName:"Attention",             filePath:"song/Attention.mp3",           coverPath:"covers/1.jpg"},
  { songName:"Freeverse Feast",       filePath:"song/Freeverse Feast.mp3",     coverPath:"covers/2.jpg"},
  { songName:"Fursat-Arjun Kanungo",  filePath:"song/Fursat.mp3",              coverPath:"covers/3.jpg"},
  { songName:"Locked Away",           filePath:"song/Locked Away.mp3",         coverPath:"covers/4.jpg"},
  { songName:"Rangdari",              filePath:"song/Rangdari.mp3",            coverPath:"covers/5.jpg"},
  { songName:"Sholay",                filePath:"song/Sholay.mp3",              coverPath:"covers/6.jpg"},
  { songName:"Stand By You",          filePath:"song/Stand By You.mp3",        coverPath:"covers/7.jpg"},
  { songName:"The Chainsmokers",      filePath:"song/The Chainsmokers.mp3",    coverPath:"covers/8.jpg"},

]

songItem.forEach((element, i)=>{
  console.log(element);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle Play Pause
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove("fa-play");
     masterPlay.classList.add('fa-pause');
     gif.style.opacity = 1;
   }
   else{
     audioElement.pause();
     masterPlay.classList.remove('fa-pause');
     masterPlay.classList.add('fa-play');
     gif.style.opacity = 0;
   }
 });

//listen to Events
audioElement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  //Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myRange.value = progress;
});

myRange.addEventListener('change',function(){
  audioElement.currentTime = (myRange.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.classList.remove('fa-pause');
   element.classList.add('fa-play');
 })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');

    audioElement.src = 'song/${songIndex+1}.mp3';
    console.log(audioElement);
    masterSongName.innerText = songs[songIndex+1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
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
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = 'song/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
