import buttonHoverSound from "../../assets/audio/buttonHover.wav";


const game = {
    config: {
        audio: {
            musicVolume: localStorage.getItem("musicVolume"),
            sfxVolume: localStorage.getItem("sfxVolume"),
        },
    },
    playSound: {
        buttonHover: () => {
            let soundEffect = new Audio(buttonHoverSound);
            soundEffect.volume = game.config.audio.sfxVolume;
            soundEffect.play();
        },
    },
    fn: {
        initConfig: () => {
            // Get/set music volume...
            let musicVolume = localStorage.getItem("musicVolume");
            console.log(musicVolume);
            if (!musicVolume) {
                musicVolume = .5;
                game.config.audio.musicVolume = musicVolume;
            }
            // Get/set sound effects volume...
            let sfxVolume = localStorage.getItem("sfxVolume");
            console.log(sfxVolume);
            if (!sfxVolume) {
                sfxVolume = .5;
                game.config.audio.sfxVolume = sfxVolume;
            }
        },
    },
}

export default game;