
const sound = new Howl({
    src: ['./audio/Imagine Dragons - Believer.mp3']
});

const playButton = document.getElementById("play")
const pauseButton = document.getElementById("pause");


sound.volume(.2);
const onClickPlay = () => {
    sound.play();
    playButton.classList.add("hidden");
    pauseButton.classList.remove("hidden");
}
const onClickPause = () => {
    sound.pause();
    pauseButton.classList.add("hidden");
    playButton.classList.remove("hidden");
}

const onPumpClick = () => {
    sound.volume(1);
    window.setTimeout(() => {
        sound.volume(.2);
    }, 3000)
}