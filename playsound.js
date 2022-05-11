function PlaySound(soundobj) {
    var audio=document.getElementById(soundobj);
    audio.volume = 0.2;
    audio.play();
}

function StopSound(soundobj) {
    var audio=document.getElementById(soundobj);
    audio.pause();
    audio.currentTime = 0;
}