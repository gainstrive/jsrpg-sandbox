
const game = {
    config: {
        audio: {
            musicVolume: localStorage.getItem("musicVolume"),
            sfxVolume: localStorage.getItem("sfxVolume"),
        },
    },
    playSound: {
        music: (file) => {
            let music = new Audio(file);
            music.volume = game.config.audio.musicVolume;
            music.play();
        },
        sfx: (file) => {
            let sfx = new Audio(file);
            sfx.volume = game.config.audio.sfxVolume;
            sfx.play();
        }
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