function PlaySound(soundobj) {
    var audio=document.getElementById(soundobj);
    audio.volume = 1.0;
    audio.play();
}

function StopSound(soundobj) {
    var audio=document.getElementById(soundobj);
    audio.pause();
    audio.currentTime = 0;
}