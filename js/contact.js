
function playSoundHover2() {
    const audio = document.getElementById("hover-sound2");
    audio.volume = 0.2; // Set the volume level (0.0 to 1.0)
    audio.play();
    }

    function playSoundHover() {
    const audio = document.getElementById("hover-sound");
    audio.volume = 0.2; // Set the volume level (0.0 to 1.0)
    audio.play();
    }

    function playSoundButton(event) {
    event.preventDefault(); // Prevent immediate redirection
    const sound = document.getElementById("button-sound");
    sound.currentTime = 0.5;
    sound.play();
    }